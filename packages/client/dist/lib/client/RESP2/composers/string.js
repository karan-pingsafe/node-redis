"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const string_decoder_1 = require("string_decoder");
class StringComposer {
    constructor() {
        Object.defineProperty(this, "decoder", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new string_decoder_1.StringDecoder()
        });
        Object.defineProperty(this, "string", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ''
        });
    }
    write(buffer) {
        try {
            this.string += this.decoder.write(buffer);
        }
        catch (e) {
            console.log("Buffer exceeded as", buffer.toString('utf8'));
            throw new Error("Node Buffer exceeded");
        }
    }
    end(buffer) {
        const string = this.string + this.decoder.end(buffer);
        this.string = '';
        return string;
    }
    reset() {
        this.string = '';
    }
}
exports.default = StringComposer;
