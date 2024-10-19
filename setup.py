from setuptools import setup, find_packages

setup(
    name='mkdocs_versioning_plugin',
    version='0.1',
    packages=find_packages(),
    include_package_data=True,
    entry_points={
        'mkdocs.plugins': [
            'versioning = mkdocs_versioning_plugin:VersioningPlugin',
        ]
    }
)
