<template>
    <div>
        <top-tab :fixed='fixed' :tab='tab'>
            <mt-tab-container-item id="1">
                1
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                2
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                3
            </mt-tab-container-item>
            <mt-tab-container-item id="4">
                4
            </mt-tab-container-item>
            <mt-tab-container-item id="5">
                5
            </mt-tab-container-item>
        </top-tab>
    </div>
</template>
<script>
import topTab from "../components/common/topTab"
export default {
    // name:"Home",
    data(){
        return{
            fixed:false,
            selected: "1",
            tab:['你的','我的','他的','她的','它的']
        }
    },
    components:{
        topTab
    },
    mounted() {
    },
}
</script>

<style>
#app {
  font-family: "蘋方-簡";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background: #f7f7f7;
}
a,
abbr,
acronym,
address,
applet,
article,
aside,
audio,
b,
big,
blockquote,
body,
canvas,
caption,
center,
cite,
code,
dd,
del,
details,
dfn,
div,
dl,
dt,
em,
embed,
fieldset,
figcaption,
figure,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hgroup,
html,
i,
iframe,
img,
ins,
kbd,
label,
legend,
li,
mark,
menu,
nav,
object,
ol,
output,
p,
pre,
q,
ruby,
s,
samp,
section,
small,
span,
strike,
strong,
sub,
summary,
sup,
table,
tbody,
td,
tfoot,
th,
thead,
time,
tr,
tt,
u,
ul,
var,
video {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  /* font: inherit; */
  /* font-size: 100%; */
  list-style: none;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: inherit;
  display: block;
}
img {
  display: block;
  width: 100%;
}
input {
  /* // bo */
  outline: none;
  display: block;
  width: 100%;
  height: 100%;
  border: none;
}
input[type="button"],
input[type="submit"],
input[type="file"],
button {
  cursor: pointer;
  -webkit-appearance: none;
}
</style>

