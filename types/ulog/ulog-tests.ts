import * as ulog from "ulog";

const log = ulog("test");

log.level = log.TRACE;

ulog.assert(true);
ulog.debug("debug message");
ulog.error("error message");
ulog.info("info message");
ulog.log("logging message");
ulog.trace("trace message");
ulog.warn("warning message");
ulog.dir("dir message");

ulog.enabled("test"); // $ExpectType boolean
ulog.enable("test");
ulog.disable();
