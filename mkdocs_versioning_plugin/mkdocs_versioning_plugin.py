import subprocess
import re
from mkdocs.plugins import BasePlugin
import glob
import os

class VersioningPlugin(BasePlugin):
    def get_git_commit_hash(self):
        """Returns the current Git commit hash."""
        try:
            # Run the git command to get the latest commit hash
            commit_hash = subprocess.check_output(['git', 'rev-parse', 'HEAD']).decode('utf-8').strip()
            return commit_hash
        except subprocess.CalledProcessError:
            # If there's an error (e.g., not a git repository), return a default version
            return "default"

    def on_post_build(self, config, **kwargs):
        version = self.get_git_commit_hash()
        
        # Define the pattern to match CSS, JS, PNG, JPG files in href and src attributes
        pattern = re.compile(r'(href|src)="([^"]+\.(css|js|png|jpg))"')
        
        # Define the root directory where the HTML files are located
        root_dir = config['site_dir']
        
        for root, dirs, files in os.walk(root_dir):
            for file in files:
                if file.endswith('.html'):
                    filepath = os.path.join(root, file)
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    # Replace the matched patterns with versioned URLs
                    updated_content = pattern.sub(r'\1="\2?version=' + version + '"', content)
                    
                    # Write the updated HTML back to the file
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(updated_content)
                    