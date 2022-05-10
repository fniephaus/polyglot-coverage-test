print("Hello from R")

i_am_called <- function(x) {
    if (x >= 0) {
        return(x)
    } else {
        return(-x)
    }
}

i_am_not_called <- function(x) {
    if (x > 10) {
       return(12)
    }
    return(x)
}
