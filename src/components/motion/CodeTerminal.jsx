const CODE_LINES = [
  { indent: 0, tokens: [{ t: "kw", v: "const" }, { t: "plain", v: " dev = " }, { t: "str", v: "'Jamshiddin'" }, { t: "punct", v: ";" }] },
  { indent: 0, tokens: [{ t: "kw", v: "function" }, { t: "fn", v: " buildUI" }, { t: "punct", v: "(" }, { t: "param", v: "idea" }, { t: "punct", v: ") {" }] },
  { indent: 1, tokens: [{ t: "kw", v: "return" }, { t: "plain", v: " " }, { t: "tag", v: "<Component" }, { t: "plain", v: " " }, { t: "attr", v: "clean" }, { t: "tag", v: " />" }, { t: "punct", v: ";" }] },
  { indent: 0, tokens: [{ t: "punct", v: "}" }] },
  { indent: 0, tokens: [{ t: "comment", v: "// ship it →" }] },
];

export default function CodeTerminal({ className = "" }) {
  return (
    <div className={`code-terminal ${className}`} aria-hidden="true">
      <div className="code-terminal-bar">
        <span className="code-terminal-dot code-terminal-dot-red" />
        <span className="code-terminal-dot code-terminal-dot-yellow" />
        <span className="code-terminal-dot code-terminal-dot-green" />
        <span className="code-terminal-title">portfolio.jsx</span>
      </div>
      <pre className="code-terminal-body">
        <code>
          {CODE_LINES.map((line, i) => (
            <span className="code-terminal-line" key={i}>
              {"  ".repeat(line.indent)}
              {line.tokens.map((token, j) => (
                <span key={j} className={`code-token code-token-${token.t}`}>
                  {token.v}
                </span>
              ))}
            </span>
          ))}
          <span className="code-terminal-cursor" />
        </code>
      </pre>
    </div>
  );
}
