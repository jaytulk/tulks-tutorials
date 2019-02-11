import nodeInstallImage1 from './node-install-1.png';
import nodeInstallImage2 from './node-install-2.png';
import node from './node.png';
import yarn from './yarn.png';
import angular from './angular.png';
import react from './react.png';
import npm from './npm.png';

export const nodeSetupTitle = 'Setting up for JavaScript Development';

const markdown = `
# ${nodeSetupTitle}

### This article will get you set up to run the build tools(among other things) for a modern JavaScript framework or library.

---

# Introduction
Most modern JavaScript frameworks and libraries have some version of a CLI(or CLI-like tool) that makes it very convenient to create new projects, change development modes, and otherwise configure or set up applications using them.

A CLI is a Command Line Interface or a Command Language Interpreter. They are tools that you can use from the applications like the Command Prompt to work with some of the fancy features that make starting a new web application easier.

Common tools that you can run from Command Prompt include: 
* [Angular CLI](https://cli.angular.io/)
* [Aurelia CLI](https://github.com/aurelia/cli)
* [Create-React-App](https://facebook.github.io/create-react-app/)
* [Svelte CLI](https://github.com/sveltejs/svelte-cli)
* [Vue CLI](https://cli.vuejs.org/)
* etc...

I believe all of these use Node behind the scenes to install the correct dependencies and run local servers when you build your application. Regardless of what framework or library you decide to work with, Node is a wonderful tool to have at your disposal, and it a must-have for learning to work with and build on modern JavaScript technologies. We'll start there.

---

# Installing Node
![Node][nodeImage]

Node.js, aka Node, is a JavaScript runtime built on Chrome's V8 JavaScript engine. You can read more about it [here](https://nodejs.org/en/about/).

1. To install Node, visit their website and pick an installer based on your operating system. You can choose between their latest LTS(Long Term Support) version or their Current version. Either will work great for you, and YOLO, so I install the [Current version](https://nodejs.org/en/download/current/) for Windows.

![Install Node Image 1][installNodeImage1]

2. Run the installer. Once complete, you can run Command Prompt and enter \`node -v\` to verify that everything was truly successful is ready to go. You can start a Command Prompt instance on Windows by either typing Command Prompt into the Windows search bar, or pressing \`Win+R\` and entering \`cmd\`.

![Install Node Image 2][installNodeImage2]

That's it! Now that you are set up with Node, you can install a package manager to install your app builders.

---

# NPM

![NPM][npmImage]
### **Note**: NPM should have been installed when you installed Node. You can check this by entering "npm -v" in a Command Prompt instance.

NPM(Node Package Manager) is used to download libraries and other JavaScript "packages" from [NPM](https://www.npmjs.com/).

There are a few commands to learn in order to work with NPM: You can check them out [here](https://docs.npmjs.com/cli-documentation/). The most important for you to know are:
* **npm init** 
    * This will initialize the current folder you are in with a package.json file. This will be used to tell NPM what packages to install(along with a plethora of other useful things)
* **npm install --save package-name** 
    * ie: npm install --save polished
    * Once your current directory has been installed, this will download the package to a local node_modules folder. You can enter more than one package name, separated by spaces.
    * The --save piece tell NPM to update the current directory's package.json file's dependencies.
* **npm run script-name**
    * ie: npm run build
    * This will attempt to execute the script with the same script-name defined under "scripts" in the project's package.json file.

By adding --global after the NPM command, the command will be run on a global node_modules folder. This is typically how you will install a CLI or CLI-ish tool. ie: npm install --global create-react-app

Pro tip: You can enter an alias for these commands instead: ie: use npm i instead of npm install. You can see the alias in their documentation for a command(if one exists).
Pro tip 2: Some scripts do not need to be prefaced by 'run' - ie: npm start instead of npm run start

---

# Yarn

![Yarn][yarnImage]

Yarn is an alternative to NPM that does a little extra, and is a little more semantic. I prefer it, mostly because I don't have to type as much and Yarn came up with some great ideas, like maintaining a lock file called yarn.lock that minimizes download times and makes it easy to maintain the correct version of what package version your application uses(which NPM adopted as well in the form of a package-lock.json).

You can download an installer [here](https://yarnpkg.com/en/docs/install#windows-stable).
Once you are hooked up, you should be able to open a command prompt and get a version number by entering \`yarn -v\`

---

# Creating a React Application
![React][reactImage]

1. Open a Command Prompt window, and enter: \`npm install -g create-react-app\`
    * If you were a G and installed Yarn, it would be \`yarn global add create-react-app\`

2. Navigate to a folder where you would like create an application. I typically use something like \`D:\\Applications\`. **Note**: Create-React-App will make a folder and install everything inside of that folder, so there is no need to make a new folder specifically for your new project(ie: Making \`D:\\Application\\whatever\` would turn in to \`D:\\Applications\\whatever\\whatever\`, which is no bueno).

3. Enter \`create-react-app project-name\`, where project-name is the name you would like to give your new application. It is better to use kebab case(more on that [here](https://medium.com/@pddivine/string-case-styles-camel-pascal-snake-and-kebab-case-981407998841)), some operating systems do not like variations.

4. Once the install is complete, you can follow the instruction and navigate into your newly created application folder and run either \`npm start\` or \`yarn start\`, and let the development server spin up.

You should be good to rock on roll out with some radical React!

# Creating an Angular Application
![Angular][angularImage]
1. Open a Command Prompt window, and enter: \`npm install -g @angular/cli\`
    * If you were a G and installed Yarn, it would be \`yarn global add @angular/cli\`

2. Navigate to a folder where you would like create an application. I typically use something like \`D:\\Applications\`. **Note**: The Angular CLI will make a folder and install everything inside of that folder, so there is no need to make a new folder specifically for your new project(ie: Making \`D:\\Application\\whatever\` would turn in to \`D:\\Applications\\whatever\\whatever\`, which is no bueno).

3. Enter \`ng new project-name\`, where project-name is the name you would like to give your new application. It is better to use kebab case(more on that [here](https://medium.com/@pddivine/string-case-styles-camel-pascal-snake-and-kebab-case-981407998841)), some operating systems do not like variations.

4. Once the install is complete, you can follow the instruction and navigate into your newly created application folder and enter \`ng serve\`, and let the development server spin up.

You should be good to attack the angles with some awesome Angular!

---

# Pick an Editor
The lines are blurring a little bit between an editor and an IDE(Integrated Development Environment), but either way you will a convenient and flexible environment to create your application with.

I would suggest [VS Code](https://code.visualstudio.com/download). The community support and TLC it has been getting over the years has turned into quite the force to be reckoned with, and it will serve you well.

Alternatives include(but are not limited to): [Atom](https://atom.io/), [Sublime Text](https://www.sublimetext.com/3), and [WebStorm](https://www.jetbrains.com/webstorm/download/)(this one is not free, but you might be able to get it with the JetBrains account you get with SELU).

Pro tip: Be on the look out for extensions for whatever editor you choose. There are some magnificent ones out there that will help improve your productivity, among other things.

That's all I have for now, feel free to ship any question my way on the Discord channel the TAs have hooked up, or email me at jtulk@turner-industries.com

[installNodeImage1]: ${nodeInstallImage1} "Install Node"
[installNodeImage2]: ${nodeInstallImage2} "Successful Install"
[yarnImage]: ${yarn} "Yarn"
[nodeImage]: ${node} "Node"
[npmImage]: ${npm} "NPM"
[reactImage]: ${react} "React"
[angularImage]: ${angular} "Angular"
`;

export default markdown;
