---
glightbox: false
---

# Overflow Handbook

## What is this?

This handbook aims to serve as a guide throughout your journey as a committee member of Overflow. It contains details on
how the club is ran, important things you should keep note of, as well as past proposals.

Regardless of what your role might be, be it as the President or a Tech Lead, this handbook should serve a useful
resource in performing your role to it's best.

!!! tip

    If you're not a committee member, this handbook should give you a rough idea of the things Overflow handles.

In this handbook you will find various guides and resources on the various duties a committee member will have to
perform. This includes but is not limited to; preparing workshop sessions, bootcamps, and the various events that
Overflow hosts and prepares throughout the year.

This handbook is heavily inspired by the GitLab Handbook, which you can view [here](https://about.gitlab.com/handbook/).

## Contributing

All contributions to the handbook are welcome, no matter your role. In the section on [resources](/admin/resources), you
will find a more detailed guide on what should be included here.

Contributions can be made as a GitHub PR, and **should follow** the general guidelines
detailed [here](https://about.gitlab.com/handbook/style-guide/).

### Running remotely

To get started with contributing to the handbook, to make things easier, you can consider using a hosted service like GitHub Codespaces or [GitPod](https://gitpod.io/#https://github.com/np-overflow/handbook).

### Running locally

Alternatively, if you'd like to make changes locally, follow the steps below:

1. Clone the repo: `git clone https://github.com/np-overflow/handbook`
2. Choose your preferred path: [Docker](#running-locally-using-docker) or [running manually](#running-locally-manually).

#### Running locally using Docker

1. Install dependencies: `make build`
2. Start the dev server: `make dev`

#### Running locally manually

1. Ensure that a version of Python is installed.
2. Install `mkdocs` globally: `pip install -U mkdocs`
3. Install dependencies: `pip install -r requirements.txt`
4. Start the dev server: `mkdocs serve`
