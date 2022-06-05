class Vue{
    mount(arg0: string) {}
    static createApp(arg0: { data(): { answer: string; iscbe: boolean; }; methods: { display(num: any): void; clearScreen(): void; calculate(): void; }; }) {
        return new Vue();
    }
}

var app__ = Vue.createApp({
    data() {
        return {
            answer: "0",
            iscbe:false
        };
    },
    methods: {
        display(num) {
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
            } else {
                if ((this.answer[this.answer.length-1] === "." || this.answer[this.answer.length-1] === "+" ||
                    this.answer[this.answer.length-1] === "-" || this.answer[this.answer.length-1] === "*" ||
                    this.answer[this.answer.length-1] === "/") && (num === "." || num === "+" ||
                    num === "-" || num === "*" || num === "/")) {
                    this.answer = this.answer.slice(0, this.answer.length-1) + num;
                }
                else {
                    this.answer += num;
                }
            }
        },
        clearScreen() {
            this.answer = "0";
        },
        calculate() {
            this.iscbe=true;
            this.answer = eval(this.answer);
        }
    }
})
app__.mount("#app")