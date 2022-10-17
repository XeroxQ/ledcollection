module.exports = {
    async settings({ homey, body }){
        return homey.app.updateSettings( body );
    },
    async getScreensavers({ homey }){
        return Object.values(homey.app.animations).map(a => ({id: a.opts.id, name: a.opts.title[homey.app.currentLang]}));
    },
    async setScreensaver({ homey, params }){
        const animation = homey.app.animations[`${params.id}`];
        if(animation) {
            homey.app.log('Setting animation', params.id);
            animation.start();
        }
    }
    // this.ledRingApi = this.homey.api.getApiApp('openmindnl.ledcollection');
    // const getScreensavers = await this.ledRingApi.get('/screensavers');
    // const setScreensaver = await this.ledRingApi.post(`/screensaver/${sceensaverID}`);
};