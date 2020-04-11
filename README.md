# cannon-demo-test

## Getting Started

1. Clone `cannon-es` and `cannon-demo-test` as sibling directories.
```
git clone https://github.com/react-spring/cannon-es
git clone https://github.com/codynova/cannon-demo-test
```

2. Build `cannon-es` at whatever version or commit you desire to test.
```
cd cannon-es
yarn
git checkout 642654ea
yarn build
```

3. Edit lines 1-2 in `cannon-demo-test/src/scripts/index.js` to switch between your local build of `cannon-es`, and Schteppe's original `cannon.js`.
```
import * as CANNON from '../../../cannon-es/dist';
// import * as CANNON from 'cannon';
```

4. Run the `start` script in `cannon-demo-test` to launch a local dev server for testing Cannon demos.
```
cd cannon-demo-test
yarn
yarn start
```
