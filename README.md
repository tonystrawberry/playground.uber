<p align="center">
  <a>
    <img src="https://www.uber-assets.com/image/upload/v1538695540/iOS_App_Icon.png" width="60" />
  </a>
</p>
<h1 align="center">
  Uber mobile interface
</h1>

- 🎯 React Native tutorial from https://www.youtube.com/watch?v=bvn_HYpix6s&t=1s&ab_channel=SonnySangha
- 🚀 This Uber clone application is a multi-platform application built using React Native
- 🎨 Styling done with <a href="https://www.nativewind.dev/">NativeWind</a> (TailwindCSS)
- 📱 Using ExpoGo for live rendering on the mobile phone

# 📚 Libraries used
- `nativewind` for the styling
- `react-native-maps` for displaying the maps and the pin of the selected restaurant
- `react-navigation` for handling the navigation between screens
- `react-native-elements` for using cute icons
- `react-native-google-places-autocomplete`, `react-native-maps` and `react-native-maps-directions` for the Google maps APIs 
- `@reduxjs/toolkit` for the global state management and persisting data across the different screens

# 🗂 Folder structure
- `assets` for the images
- `components` for the reusable components
- `screens` for the different application pages (one screen component per page)
- `slices` for the different reducers of the Redux state (basket & restaurant)
  - `store.js` will use these reducers and make them available to the React components
- `App.js` is the entrypoint of the application
- `babel.config.js` for converting ES code into a backwards compatible version of JavaScript
- `tailwind.config.js` for specifying which files can use TailwindCSS styling

# 🚀 Google console developer
API key for the Google Maps API can be found here: https://console.cloud.google.com/apis/dashboard?project=playground-uber
