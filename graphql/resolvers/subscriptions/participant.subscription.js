module.exports = {
    sayi: {
        subscribe: (parent, args, {pubSub}) => {
            let sayi = 5;
            
            setInterval(() => {
                sayi += 1;
                pubSub.publish('sayi', {sayi} );

            },3000);

            return pubSub.asyncIterator('sayi')
        }
    }
};