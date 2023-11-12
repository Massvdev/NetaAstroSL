---
title: Using Neta DAO Vault
description: Using Neta DAO Vault.
---

## Introduction
### What is Neta DAO Vault? 
[Neta DAO Vault](https://vault.netadao.zone) is a self-hosted instance of the [Vaultwarden](https://github.com/dani-garcia/vaultwarden) password manager for members of the DAO. From [Linode](https://www.linode.com/docs/guides/how-to-self-host-the-vaultwarden-password-manager/):

>The Vaultwarden project (formerly known as bitwarden_rs) provides a lightweight, single-process, API-compatible service alternative to [Bitwarden](https://bitwarden.com/). Vaultwarden is an open source password management application that can be self-hosted and run on your infrastructure. By running the vaultwarden service, you can use Bitwarden browser extensions and mobile applications backed by your server.

As Vaultwarden is a fork of Bitwarden with fully auditable code, much of Bitwarden's documentation applies. See the [Vaultwarden Wiki](https://github.com/dani-garcia/vaultwarden/wiki) for more information.

### How does this directly help the DAO?
From [Avast](https://blog.avast.com/en/secure-browser/why-you-should-use-a-password-manager):
>Password managers act as a secure vault for all of your login information. Good ones also have random password generators, making it easier to create those long, complicated secure passwords.

In addition to promoting individual user security, Vaultwarden offers [organizations](https://bitwarden.com/help/getting-started-organizations/), [access control](https://bitwarden.com/help/user-types-access-control/), [credential sharing](https://bitwarden.com/help/sharing/), and [emergency access](https://bitwarden.com/help/emergency-access/) - these features allow members to delegate trusted contacts to ensure that the DAO can continue operations in the event that a user or number of users are unreachable. This promotes the survivability of the DAO and assists in eliminating [information silos](https://www.indeed.com/career-advice/career-development/information-silos-causes), an aspect of centralization.

### How is this hosted? How can I be sure that my credentials are safe?
This Vaultwarden instance is running on a VPS based in the eastern United States. In the interest of operational security, exact details will not be disclosed publicly.

See the Bitwarden [Security FAQs](https://bitwarden.com/help/security-faqs/) and [Encryption](https://bitwarden.com/help/what-encryption-is-used/) pages for further details on information security. 

### What prevents someone from using this as their own personal credential vault?
At present time, nothing. We would prefer that you didn't do this, but there's nothing in place to prevent an individual from storing their Neopets and Club Penguin passwords here. However, in the interest of promoting good information security practices, this will remain accessible for the time being. Don't abuse it.

### What can be done with the vault to make it more robust and DAO-oriented?
Vaultwarden is written in Rust and is API compatible, which makes it ideal for interacting with Juno smart contracts. Future developments could take the form of programmatically granting individuals access to credentials based on wallet activity or DAO participation. Stored credentials could also be programmed to interact with other elements of the Neta DAO stack, allowing for zero human knowledge credential access - another step in making Neta DAO truly decentralized and autonomous.

## Usage
If you hold credentials related to DAO activities and wish to store them in the vault, the following is an example workflow:
- Create an account. **Two-factor authentication (2FA) has not been implemented at this time - if you lose your master password, this cannot be retrieved until a later date.**
- Download/install one of the official [Bitwarden clients](https://bitwarden.com/download/) - all are compatible with Vaultwarden. This example workflow will proceed with instructions for using a browser extension.
- In the extension, open Settings and specify https://vault.netadao.zone in the Server URL field. Save the settings and log in with your email address and master password. Your browser extension will now be able to access your vault on Neta DAO's Vaultwarden instance.

Due to the variety of options, many workflows are possible - see the [Bitwarden help page](https://bitwarden.com/help/change-client-environment/) for instructions on connecting via desktop application, CLI, or mobile app. If a client cannot be used, accessing the vault through a web browser without an extension is always an option.

See the [Bitwarden Help Center](https://bitwarden.com/help/) for further usage information, particularly the following articles:
* [Create your Bitwarden Account](https://bitwarden.com/help/create-bitwarden-account/)
* Get Started with: [Web Vault](https://bitwarden.com/help/getting-started-webvault/) / [Browser Extensions](https://bitwarden.com/help/getting-started-browserext/) / [Mobile Apps](https://bitwarden.com/help/getting-started-mobile/) / [Desktop Apps](https://bitwarden.com/help/getting-started-desktop/) / [Organizations](https://bitwarden.com/help/getting-started-organizations/)
* [Bitwarden CLI](https://bitwarden.com/help/cli/)
* [User Types and Access Control](https://bitwarden.com/help/user-types-access-control/)

## Best Practices
- **Do not back up any seed phrases or private keys here.** While Bitwarden has been extensively audited by third parties, entering your seed phrases into websites is not a good habit to pick up. Store this information elsewhere.
- Identify the scope of your credentials. If you don't plan on making a set of credentials accessible to other DAO members or you determine they should not be stored in the DAO vault, an offline password manager such as [KeePassXC](https://keepassxc.org/) is probably a better means of secure storage.
