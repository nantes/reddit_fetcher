# reddit_fetcher

Simple Reddit client App created with React Native that gather https://api.reddit.com/r/pics/new.json 

## Installation and getting started
  * Clone or download the project
  * yarn install
  * yarn start
  * yarn run ios  (for ios)
  * yarn run android (for android)

## TO-DO
  * Unit testing
  * Improve UI (better User experience, refactor Picker or use another component, add ActivityIndicator for loading stages)
  * Improve sorting mostly for controversial topics without fetching  https://api.reddit.com/r/pics/controversial.json
  * some refactor for components (like item: would be nice to calculate the time outside the component)
  * implement sagas for async calls (FETCH_REDDIT)
  * Add some  error notice visualization in case of fetch error