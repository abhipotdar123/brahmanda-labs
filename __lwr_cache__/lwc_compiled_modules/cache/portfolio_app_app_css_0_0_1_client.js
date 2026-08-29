function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".portfolio-app" + shadowSelector + " {min-height: 100vh;background: #ffffff;color: #111827;}main" + shadowSelector + " {width: 100%;}section" + shadowSelector + " {max-width: 1200px;min-height: 400px;margin: 0 auto;padding: 100px 24px;}section" + shadowSelector + " h2" + shadowSelector + " {font-size: 40px;margin: 0;}";
  /*LWC compiler v9.3.4*/
}
export default [stylesheet];