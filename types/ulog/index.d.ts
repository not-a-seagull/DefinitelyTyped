// Type definitions for ulog 1.1
// Project: http://github.com/download/ulog
// Definitions by: not_a_seagull <https://github.com/not-a-seagull>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = ulog;

declare function ulog(name: any): any;

declare namespace ulog {
    const DEBUG: number;

    const ERROR: number;

    const INFO: number;

    const LOG: number;

    const NONE: number;

    const TRACE: number;

    const WARN: number;

    let level: number;

    const ulog: {
        version: string;
    };

    function assert(...args: any[]): void;

    function debug(): void;

    function dir(): void;

    function disable(): void;

    function enable(name: string): void;

    function enabled(name: string): boolean;

    function error(): void;

    function info(): void;

    function log(): void;

    function trace(): void;

    function warn(): void;

}

