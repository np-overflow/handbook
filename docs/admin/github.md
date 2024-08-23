# GitHub

All of our code is hosted on GitHub under the [`np-overflow`](https://github.com/np-overflow) organisation. This includes source code for the official website, any projects that we might be working on, and any code involved in the workshops that we run.

Access to the GitHub organisation is managed by the P/VPs and the Head of Technology. If you need access to the organisation, reach out to them to sort it out. You are encouraged to adhere to the [access control guidelines](/admin/access-control#GitHub) when managing access to the GitHub organisation and its repositories.

## Dependency management

For repositories with supported dependency management tools, we've installed Renovate to automatically update dependencies. It's important to upgrade dependencies over time for various reasons:

- **Improved functionality**: Newer versions of dependencies might have new features or bug fixes that can improve the functionality of the project.
- **Security**: Older versions of dependencies might have security vulnerabilities that can be exploited. Upgrading to newer versions can help mitigate these vulnerabilities.
- **Maintenance**: As time goes on, older versions of dependencies might not be maintained by their maintainers. Upgrading to newer versions can help ensure that the project remains maintainable.

We highly encourage you to handle dependency management in a timely manner. If you're not sure how to do this, here's a quick guide:

1. Renovate will usually create a pull request to update the dependencies. The comment in the pull request will detail the changes made and the reasons for the changes.
2. Check the pull request thoroughly. If you're not sure about the changes, ask for help from someone who knows about the project.
3. Check if the project still works as expected after the changes. You might need to clone the repository and run the project locally or open the repository in a cloud-based IDE (e.g., Gitpod or GitHub Codespaces) to test the changes.
4. If the project still works as expected, you may consider merging the pull request. If the project doesn't work as expected, you may need to fix the project or ask for help from someone who knows about the project.
