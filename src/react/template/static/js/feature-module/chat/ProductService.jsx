export const ProductService = {
    getProductsData() {
        return [
            {
                id: 3,
                name: 'Ghulam Mehmood',
                department: 'MIS',
                image: '/assets/img/avatar/avatar-17.png',
                email: 'gmehmood@skm.org.pk',
                phone: '923025748598',
                address: 'skm.org.pk'
              },
              {
                id: 4,
                name: 'Waqas Ali',
                department: 'MIS',
                image: '/assets/img/avatar/avatar-17.png',
                email: 'waqasali@skm.org.pk',
                phone: '923214872551',
                address: 'skm.org.pk'
              }
        ];
    },

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },

    getProducts() {
        return Promise.resolve(this.getProductsData());
    },

    getProductsWithOrdersSmall() {
        return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    },

    getProductsWithOrders() {
        return Promise.resolve(this.getProductsWithOrdersData());
    }
};
