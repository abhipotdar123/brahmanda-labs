function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".site-header" + shadowSelector + " {position: sticky;top: 0;z-index: 1000;width: 100%;background: #ffffff;border-bottom: 1px solid #e5e7eb;}.header-container" + shadowSelector + " {max-width: 1200px;margin: 0 auto;padding: 16px 24px;display: flex;align-items: center;justify-content: space-between;gap: 24px;}.brand" + shadowSelector + " {display: flex;flex-direction: column;text-decoration: none;}.brand-name" + shadowSelector + " {font-size: 20px;font-weight: 700;color: #111827;}.brand-role" + shadowSelector + " {font-size: 12px;color: #6b7280;margin-top: 2px;}.desktop-nav" + shadowSelector + " {display: flex;align-items: center;gap: 24px;}.desktop-nav" + shadowSelector + " a" + shadowSelector + " {color: #374151;text-decoration: none;font-size: 14px;font-weight: 500;}.desktop-nav" + shadowSelector + " a:hover" + shadowSelector + " {color: #0176d3;}.theme-button" + shadowSelector + " {border: none;background: transparent;cursor: pointer;font-size: 20px;}";
  /*LWC compiler v9.3.4*/
}
export default [stylesheet];