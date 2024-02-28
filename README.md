# SurveyMonkey API Integration Project

This project demonstrates how to integrate with the SurveyMonkey API using Node.js. It includes examples of fetching a list of surveys and their responses using the SurveyMonkey API.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (preferably the latest stable version)
- npm (Node.js package manager)

### Installing

To set up the project, follow these steps:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/adanzweig/nodejs-surveymonkey.git
cd /nodejs-surveymonkey
```

2. Install the necessary npm packages:

```bash
npm install
```

3. Create a `.env` file in the root directory of the project. You will need to add your SurveyMonkey API token here:

```plaintext
TOKEN=your_surveymonkey_api_token_here
```

### Usage

To run the script, execute the following command in your terminal:

```bash
node index.js
```

This command will fetch the first survey from your SurveyMonkey account and print its responses to the console.

## Built With

* [Node.js](https://nodejs.org/) - The JavaScript runtime used
* [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
* [dotenv](https://github.com/motdotla/dotenv) - Module to load environment variables from a `.env` file

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details