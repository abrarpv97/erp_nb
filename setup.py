from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in erp_nb/__init__.py
from erp_nb import __version__ as version

setup(
	name="erp_nb",
	version=version,
	description="Nestorbird ERPNext Customization",
	author="Nestorbirdltd.com",
	author_email="info@nestorbird.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
