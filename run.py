#!/usr/bin/env python
import os
import shutil

from cookiecutter.main import cookiecutter
from cookiecutter.utils import work_in


if os.path.exists('boilerplate/'):
    shutil.rmtree('boilerplate/')

cookiecutter("../cookiecutter-css/", no_input=True)

with work_in('boilerplate/'):
    os.system("npm install")
    os.system("grunt")
