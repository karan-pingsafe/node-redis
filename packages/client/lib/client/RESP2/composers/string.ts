import { StringDecoder } from 'string_decoder';
import { Composer } from './interface';

export default class StringComposer implements Composer<string> {
    private decoder = new StringDecoder();

    private string = '';

    write(buffer: Buffer): void {
        try {
            this.string += this.decoder.write(buffer);
        } catch (e) {
            console.log("Buffer exceeded as", buffer)
            throw new Error("Node Buffer exceeded")
        }
    }

    end(buffer: Buffer): string {
        const string = this.string + this.decoder.end(buffer);
        this.string = '';
        return string;
    }

    reset() {
        this.string = '';
    }
}
