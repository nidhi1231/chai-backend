//use promise
const asyncHandler = (reuestHadler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).
        catch((err) => next (err))
    }
}


export {asyncHandler}
//  use async
// const asyncHolder = () => {}
// const asyncHolder = (func) => () => {}
// const asyncHolder = (func) => async()  => {}

    // use try catch 
// const asyncHolder = (fn) => async(req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }
