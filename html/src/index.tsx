if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('preact/debug');
}
import 'whatwg-fetch';
import { h, render } from 'preact';
import { App } from '@/components/app';
import '@/style/index.scss';

render(<App />, document.body);
