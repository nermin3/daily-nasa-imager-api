import * as path from "path";
import * as webpack from "webpack";
import * as nodeExternals from 'webpack-node-externals';

const environment = process.env.ENVIRONMENT;

console.log('environment:::::', environment);

let ENVIRONMENT_VARIABLES = {
  'process.env.ENVIRONMENT': JSON.stringify('development'),
  'process.env.PORT': JSON.stringify('3080'),
  'process.env.MONGO_CONNECTION_STRING': JSON.stringify('mongodb://mongo-db:27017')
};

if (environment === 'test') {
  ENVIRONMENT_VARIABLES = {
    'process.env.ENVIRONMENT': JSON.stringify('test'),
    'process.env.PORT': JSON.stringify('3080'),
    'process.env.MONGO_CONNECTION_STRING': JSON.stringify('mongodb://mongo-db:27017')
  };
} else if (environment === 'production') {
  ENVIRONMENT_VARIABLES = {
    'process.env.ENVIRONMENT': JSON.stringify('test'),
    'process.env.PORT': JSON.stringify('3080'),
    'process.env.MONGO_CONNECTION_STRING': JSON.stringify('mongodb+srv://Tester123:51FWAl9CFZuJe9xF@todo-cluster.dc3nz.mongodb.net/todos?retryWrites=true&w=majority')
  };
}

module.exports = {
  entry: './index.ts',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  target: 'node',
  externals: [nodeExternals()],
  plugins: [
    new webpack.DefinePlugin(ENVIRONMENT_VARIABLES),
  ]
};