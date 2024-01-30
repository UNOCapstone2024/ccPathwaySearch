# ccPathwaySearch

## Dependencies (subject to significant change)
- For tracking of both npm and future python dependencies, this project provides the resources for virtual environments.
- If you wish to use virtual environments, follow these steps...
    1. Create a python virtual environment: `python3 -m venv venvs/py_venv`
    2. Activate the venv: `source venvs/py_venv/bin/activate`
    3. Install requirements with pip: `pip install -r requirements.txt`
    4. To set up the node env, run this command: `nodeenv venvs/node_venv --force`
    5. Activate the node venv: `source venvs/node_venv/bin/activate`
    6. Install node dependencies: `npm install`
- You should be all set up!

## Technical Documentation (TBD)
- The `docs/technical-documentation/` directory can be used for this projects long-form report, written in whichever format (or wherever) the doc lead <mark>Anna</mark> chooses

## Doc generation
- This project currently utilizes two separate doc generators: doxygen and jsdoc.
- First install doxygen and jsdoc, then run `make -C docs/` to generate docs for both platforms.
- The docs will generate into `docs/json-docs` and `docs/backend-docs`
- To clean up docs easily, just run `make clean -C docs/`