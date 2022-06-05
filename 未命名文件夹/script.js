var Vue = /** @class */ (function () {
    function Vue() {
    }
    Vue.prototype.mount = function (arg0) { };
    Vue.createApp = function (arg0) {
        return new Vue();
    };
    return Vue;
}());
var app__ = Vue.createApp({
    data: function () {
        return {
            answer: "0",
            iscbe: false
        };
    },
    methods: {
        display: function (num) {
            if (this.answer == "0" && (num === "." || num === "+" ||
                num === "-" || num === "*" || num === "/")) {
                return;
            }
            if (this.iscbe && num !== "." && num !== "+" &&
                num !== "-" && num !== "*" &&
                num !== "/") {
                this.answer = "0";
            }
            this.iscbe = false;
            if (this.answer === "0") {
                this.answer = num;
            }
            else {
                if ((this.answer[this.answer.length - 1] === "." || this.answer[this.answer.length - 1] === "+" ||
                    this.answer[this.answer.length - 1] === "-" || this.answer[this.answer.length - 1] === "*" ||
                    this.answer[this.answer.length - 1] === "/") && (num === "." || num === "+" ||
                    num === "-" || num === "*" || num === "/")) {
                    this.answer = this.answer.slice(0, this.answer.length - 1) + num;
                }
                else {
                    this.answer += num;
                }
            }
        },
        clearScreen: function () {
            this.answer = "0";
        },
        calculate: function () {
            this.iscbe = true;
            this.answer = eval(this.answer);
        }
    }
});
app__.mount("#app");
