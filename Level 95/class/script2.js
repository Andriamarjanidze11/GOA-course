function asyncPromiseFunction(beberilomi) {
    return new Promise((resolve, reject) => {
        if (beberilomi === "")
            reject(Error("nothing piure"));
        setTimeout(function () {
            resolve(beberilomi);
            }, 3400);
            })
        }

    asyncPromiseFunction("beberilomi 2")
        .then((result) => {
            console.log("lomimagariazaan")
            })
        .catch((err) => {
            console.log(err)
        })

