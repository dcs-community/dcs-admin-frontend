export class FetchFilesAction {
    static readonly type = '[File] Fetch files';
}

export class NextFilesPageAction {
    static readonly type = '[File] Next page';
}

export class PreviousFilesPageAction {
    static readonly type = '[File] Previous page';
}

export class UploadFileAction {
    static readonly type = '[File] Upload file';

    constructor(public file: File, public name: string = null) {
    }
}
