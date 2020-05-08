import { Writable } from 'stream';

const writeable = new Writable();

export function writeD(value: number) {
  writeable.write(value & 0xff);
  writeable.write((value >> 8) & 0xff);
  writeable.write((value >> 16) & 0xff);
  writeable.write((value >> 24) & 0xff);
}

export function writeH(value: number) {
  writeable.write(value & 0xff);
  writeable.write((value >> 8) & 0xff);
}

export function writeC(value: number) {
  writeable.write(value & 0xff);
}

export function writeF(value: number) {
  writeable.write(value & 0xff);
  writeable.write((value >> 8) & 0xff);
  writeable.write((value >> 16) & 0xff);
  writeable.write((value >> 24) & 0xff);
  writeable.write((value >> 32) & 0xff);
  writeable.write((value >> 40) & 0xff);
  writeable.write((value >> 48) & 0xff);
  writeable.write((value >> 56) & 0xff);
}

export function writeS(text: string) {
  try {
    if (text) {
      writeable.write(Buffer.byteLength(text, 'utf16le'));
    }
  } catch (err) {
    console.warn(`WriteS Exception: ${err}`);
  }

  writeable.write(0);
  writeable.write(0);
}

export function writeB(array: Uint8Array) {
  try {
    writeable.write(array);
  } catch (err) {
    console.warn(`WriteB Exception: ${err}`);
  }
}

export function writeQ(value: number) {
  writeable.write(value & 0xff);
  writeable.write((value >> 8) & 0xff);
  writeable.write((value >> 16) & 0xff);
  writeable.write((value >> 24) & 0xff);
  writeable.write((value >> 32) & 0xff);
  writeable.write((value >> 40) & 0xff);
  writeable.write((value >> 48) & 0xff);
  writeable.write((value >> 56) & 0xff);
}
