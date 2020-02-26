# AI Design

Using the [Carbon Gatsby Theme](#).

## Installation

Ensure you have [Node/NPM](https://nodejs.org/en/download/) installed. If you have [brew](), you can run:

```bash
brew install node
```

After that, clone the repo and download dependencies:

```bash
npm install
```

## Making local changes

Navigate to the project directory in your terminal and run:

```bash
npm run develop
```

After the dust settles, open your browser of choice and go to `localhost:8000`. You should see the site. Make changes in your text editor and you should see the changes reflected in browser.

## Where to make changes

As a general rule of thumb, all changes will be made in `src`. If you want to change:

#### Copy and page layout
Change the files in `pages`. This largely leverages Markdown syntax, but better. Refer to the most up-to-date functionality [here](https://gatsby-theme-carbon.now.sh/).

#### Adding or tweaking custom components
Make those changes in `components`

#### Tweaking or overriding native Gatsby components
Make those changes in `gatsby-theme-carbon`. Read more about [component shadowing](https://gatsby-theme-carbon.now.sh/guides/shadowing).

#### Adding a new page

1. Add it to the side nav, in `data/nav-items.yaml`. The `title` is what will appear in the side nav, while the `path` will be the path in the url.
2. Add the page in `pages`. The name of the directory and files are important, and should match the path specified in step 1 (with the exception of index.mdx).

#### Adding assets/images
Put them in images. Subdirectories are optional but **highly** recommended for organization.

## Pre-deployment (building and testing production code)

When you get it to a point where you're ready to deploy, run

```bash
npm run prod
```
Open your browser and go to `localhost:8000/design/ai` If everything meets expectations, go to the **"Deployment"** section. If something is amiss and requires more tweaking, go back to the previous step.

*GOTCHA: If you get any inexplicable errors, namely where the images are disappearing, try this combination of commands. By default, Gatsby caches images and these commands empties the cache, rebuilds it, and serves the production code.*

```bash
npm run build
gatsby serve
```

## Deploying

Whether you're trying to deploy to staging or production, **you have to deploy the app to two geos: US South and Germany.**

1. Login to US South by running:

```bash
cf login -a https://api.ng.bluemix.net -o IBMDesignOrg -s aidp -sso
```

2. Follow the link in your terminal to use SSO to get your password. Paste the password in your terminal and you're good to go.
3. If you're deploying to **staging** — wwwstage.ibm.com/design/ai — run:

```bash
cf push -f manifest-staging.yml
```

If you're deploying to **production** — wwws.ibm.com/design/ai — run:

```bash
cf push -f manifest.yml
```

4. When that concludes, do the same thing with the Germany instance. Either:

```bash
cf login -a https://api.eu-de.bluemix.net -o IBMDesignOrg -s aidp -sso
cf push -f manifest-staging.yml
```

```bash
cf login -a https://api.eu-de.bluemix.net -o IBMDesignOrg -s aidp -sso
cf push -f manifest.yml
```

Check how it looks by going to either `www.ibm.com/design/ai` or `wwwstage.ibm.com/design/ai`. For the staging credentials, ask Kelly Churchill or Jorge "Rafa" Nogueras.

*GOTCHA: If there is any funny business on any url, try the underlying IBM Cloud URL [ai-design.ng.mybluemix.net], [ai-design.eu-de.mybluemix.net], [ai-design-staging.ng.mybluemix.net], [ai-design-staging.eu-de.mybluemix.net].*

## Updating the theme
For staying up to date and getting new functionality and bug fixes, run

```bash
npm i gatsby-theme-carbon
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
