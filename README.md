This application is a backend demonstration of an anti-chess game. This is a CLI(Command Line Interface) based application as mentioned.

In this application main programming language used is Javascript. To be more specific Nodejs framework is used.

As Javascript is a trendy language, the development process is easy.

To run this application first we need to install the nodejs framework. You can refer to the site - https://nodejs.org/en/download/package-manager.

The node version we are using is - v20.13.1 and we are also using npm(node package manager) to install the required packages. npm version is - v10.5.2.

After installing node and npm, install git. The version we are using is - git version 2.43.0.windows.1. Link - https://git-scm.com/download/win .

Inside the directory run the command - "git clone https://github.com/sayak23082002/Pice_Question1.git". This command will download all the files from the GitHub repository.

Then run - "cd Pice_Question1". This is to enter the directory.

Run "npm init -y". This will create a "package.json" file that contains all the dependencies of our project.

We need to install 2 more packages to run - 1. "readline", and 2. "nodemon". Command - "npm install nodemon readline". The first module is to take input from the user in the CLI and the second module is to run the node js server and enabling the feature of auto update server.

Also "node_modules" package will be installed to maintain all the packages.

Then run the command "nodemon index.js". "index.js" is the entry point of the application.

In our application small letters represent the pieces of the White player, who starts the game first, and capital letters represent the pieces of the Black player.

All the columns are represented as capital A, B, C, ... H, and all the rows are represented as 1, 2, 3, ... 8.

The input format will be a column number followed by a row number. Example - A2. This will be the starting position of a piece and then the destination position will be as same. Ex - A4.

If a user wants to display the board he/she have to type the "display" command.

If a player writes "quit" then the other player will win the match.









If a player managed to sacrifise all of the pices then the player wins. Other rules are same as a ordinary chess game.
