class SocialMedia {
    constructor(name, type, followers) {
        this._name = name,
        this._type = type,
        this._followers = followers
    }

    getInfo() {
        return {
            name: this._name,
            type: this._type,
            followers: this._followers
        }
    }
}

class MobileApp extends SocialMedia {
    constructor(name, type, followers, needDownload) {
        super(name, type, followers)
        this._needDownload = needDownload
    }

    getInfo() {
        const INFO = super.getInfo()
        INFO.needDownload = this._needDownload
        return INFO;
    }
}

class Tiktok extends MobileApp{
    constructor(name, type, followers, needDownload, commentVideos) {
        super(name, type, followers, needDownload)
        this._commentVideos = commentVideos
    }

    getInfo() {
        const INFO = super.getInfo()
        INFO.commentVideos = this._commentVideos
        return INFO;
    }
}