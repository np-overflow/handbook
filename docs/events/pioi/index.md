# Poly-ITE Olympiad in Informatics [PIOI]

PIOI is the flagship external event of Overflow. Here are some key points:

* 4 days of workshops
* 1 day of contest, split across two sessions
* 4 questions, 100 points each

## Registration

The kick off to PIOI starts with the registration. A registration form is prepared and is sent out by the lecturer in charge to the various polytechnics.

A few things must be kept in mind when creating the registration form:

* Participants dietary restrictions
* Participants emergency contacts
* Participants existing health conditions (allergies, etc)
* Has the participant read through and agreed to the T&Cs + Rules?

Being able to confirm these during the registration process will reduce the administrative overhead down the road.

## Workshops

Historically, we provide 4 workshops, spread across 4 days. The workshop content generally remain the same, although the organizers of each iteration are encouraged to make their own enhancements and changes. Importantly, the workshops should focus on covering **basics of doing competitive programming using C++**. It is safe to assume that the audience have little to no knowledge of C++, or competitive programming, and the workshops should be tailored as such.

The workshops held usually cover the topics below:

* Introductions to C++
* Introductions to Data Structures in C++
* Introductions to Algorithms in C++
* Practical workshop

The practical workshop places is a sort of familiarization session for the participants. The intended goal is for them to do any preparation necessary before the actual contest day. Some of the things that could be covered include:

* Setting up their account on the contest platform
* Familiarizing themselves with the computers provided
* Going through practice questions

## Contest

The contest comprises of many components, including:

* Contest platform

### Contest platform

Previously, the contest platform used was [Contest Management System](https://github.com/cms-dev/cms). But it has since been replaced with [DMOJ](https://docs.dmoj.ca), which is a more modern and feature-rich platform.

For historical reasons, the contest platform is still referred to as the "CMS".

The preferred way of "hosting" the contest platform is using a "flat-rate" service such as DigitalOcean / Linode. Alternatively, if you're up for the adventure, using larger cloud platforms such as AWS, Google Cloud Platform, or Azure is also possible. 

Generally, a firewall is not needed as the server should be put behind Cloudflare. 

Below are of the observations noted between DO / Linode:

DO:

* By default, DO applies some limitation on the total amount of VMs that can be created per account. This may cause issues during testing. You may need to contact DO support early on to increase this limit.
* DO is generally slower than Linode.
* Favorable compared to Linode in terms of creating snapshots.

Linode:

* Linode can only create 1 manual snapshot per VM. The "hacky" way to get around this is to clone the VM, but the VM is also billed.

#### Installation

!!! warning "Security"

    Security of the platform is important to prevent unauthorized access. Please use cryptographically random passwords and SSH keys.

##### The easy way

Download the two `.img` files from SharePoint and restore them to VMs.

[Link](https://connectnpedu.sharepoint.com/:f:/r/sites/np-overflow/Shared%20Documents/General/Assets/PIOI?csf=1&web=1&e=dCLPQi)

##### The manual way

1. Setup a new Debian-based VM on your cloud provider of choice:

    Name: `pioi-dmoj-site`

2. Update and create non-root users

      ssh root@<IP_ADDRESS>

      apt-get update -y && \
      apt-get upgrade -y && \
      adduser dmoj && \
      adduser dmoj sudo && \
      exit

3. Add your SSH key, then login to the `dmoj` non-root user

      ssh-copy-id -i <KEY_PATH> dmoj@<IP_ADDRESS> && \
      ssh dmoj@<IP_ADDRESS>

4. Follow the DMOJ setup guide [here](https://docs.dmoj.ca/#/site/installation)

    Replace the `npm install` command with the following (install `postcss-cli@9` instead of `postcss-cli`)

        npm install -g sass postcss-cli@9 postcss autoprefixer

    After "Creating the database tables", run the following command:

        mysql_tzinfo_to_sql /usr/share/zoneinfo/  | sudo mysql -D mysql

    It is recommended to create separate user accounts for the following services ran on `supervisord`:

        adduser dmojbridged && \
        adduser dmojcelery && \
        adduser dmojuwsgi && \
        adduser dmojwsevent

    The `supervisord` configurations are below:

    ```bash
    --8<-- "supervisor-conf.txt"
    ```
    

    For the uWSGI service, the user account should be specified in the `uwsgi.ini` configuration file rather than the `supervisord` configuration file.

    The `uwsgi.ini` configuration file is as follows:

    ```toml
    --8<-- "uwsgi-ini.txt"
    ```
