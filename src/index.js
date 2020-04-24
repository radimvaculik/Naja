import './polyfills';

import {Naja, HttpError} from './Naja';
import {AbortExtension} from './extensions/AbortExtension';
import {UniqueExtension} from './extensions/UniqueExtension';


const naja = new Naja();
naja.registerExtension(AbortExtension);
naja.registerExtension(UniqueExtension);

naja.HttpError = HttpError;

export default naja;
