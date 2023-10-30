# Ionic Capacitor BoredAPI Project

This project utilizes Ionic framework with Capacitor to create a mobile application that fetches random activities from [boredapi.com](https://www.boredapi.com/). Users can discover various activities to beat boredom and make their free time more enjoyable.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your development machine
- [Ionic CLI](https://ionicframework.com/docs/cli) installed globally: `npm install -g @ionic/cli`
- [Capacitor CLI](https://capacitorjs.com/docs/getting-started) installed globally: `npm install -g @capacitor/cli`

## Installation

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd ionic-capacitor-boredapi`
3. Install dependencies: `npm install`

## Usage

### Web Development

To run the app in the browser, use the following command:

```bash
ionic serve
```

### Android Development

To open the app in an Android emulator or on a connected Android device, use:

```bash
ionic capacitor run android
```

### iOS Development

To open the app in an iOS simulator or on a connected iOS device, use:

```bash
ionic capacitor run ios
```

### Building the App

Before building the app for production, configure the Capacitor environment for the desired platforms:

```bash
ionic capacitor add android
ionic capacitor add ios
```

Then, build the app for each platform:

```bash
ionic capacitor build android
ionic capacitor build ios
```

## Contributing

Contributions are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
