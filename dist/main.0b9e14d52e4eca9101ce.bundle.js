(() => {
  "use strict";
  const e = (...e) => e.every((e) => "number" == typeof e && !isNaN(e));
  ((t, s) => {
    t.hideErrors(),
      console.log("app.js"),
      s.onClick(() => {
        t.hideErrors();
        const n = s.getInputs(),
          r = ((...e) => e.map((e) => parseInt(e)))(...n);
        if (e(...r)) {
          const [e, t] = r;
          s.setResult(e + t);
        } else s.setResult(""), t.handleAdditionError(n, r);
      });
  })(
    new (class {
      constructor() {
        this.errorBox = document.getElementById("error");
      }
      handleAdditionError(t, s) {
        const n = t.reduce(
          (t, n, r) => (e(s[r]) ? t + "" : t + `${n} is not a number. `),
          "Please enter two valid numbers! ",
        );
        this.errorBox.classList.remove("invisible"),
          (this.errorBox.innerText = n);
      }
      hideErrors() {
        this.errorBox.classList.add("invisible");
      }
    })(),
    new (class {
      constructor() {
        (this.numberOneInput = document.getElementById("numberOne")),
          (this.numberTwoInput = document.getElementById("numberTwo")),
          (this.addValuesButton = document.getElementById("addValues")),
          (this.resultDiv = document.getElementById("result"));
      }
      getInputs() {
        return [this.numberOneInput.value, this.numberTwoInput.value];
      }
      setResult(e) {
        this.resultDiv.innerText = e;
      }
      onClick(e) {
        this.addValuesButton.addEventListener("click", e);
      }
    })(),
  ),
    console.log("hey"),
    console.log("hey");
})();
