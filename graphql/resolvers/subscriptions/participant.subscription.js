module.exports = {
    sayi: {
        subscribe: (parent, args, {pubSub}) => {
            return pubSub.asyncIterator('sayi')
        }
    }
};