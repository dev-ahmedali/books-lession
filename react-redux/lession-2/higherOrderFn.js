const invokeIf = (condition, fnTrue, fnFalse) => {
     condition ? fnTrue() : fnFalse()
}

const showWelcome = () =>
 console.log("Welcome!!!")
const showUnauthorized = () =>
 console.log("Unauthorized!!!")
invokeIf(true, showWelcome, showUnauthorized)
invokeIf(false, showWelcome, showUnauthorized)

// const userLogs = (userName) => (message) =>
//   console.log(`${userName} => ${message}`);

//   const log = userLogs("grandpa23")

//   log("attempeded to get 20 fake members")
//   getFakeMember(20).then(
//     member => log(`successfully loaded ${members.length} members`),
//     error => log("encountered an error loading members")
//   )
