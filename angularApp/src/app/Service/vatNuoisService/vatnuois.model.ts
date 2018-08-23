export class Vatnuois {
    _id: String;
    maVatNuoi: String;
    
    // vi tri
    tenTrai: String;
    tenDay: String;
    tenChuong: String;

    ngaySinh: {type: Date};
    ngayNhapChuong: {type: Date};
    gioiTinh: {type: Boolean};

  
    phamGiong: {type: String};// {type: String, required: true},
    loai: {type: String};// {type: String, required: true},
    sucKhoe: {type: String};//{type: String, required: true},
    ghiChu: {type: String};

    // -- cap nhat --
    me: {type: String};
    tinhCha: {type:String};
    giaMua: {type: String};
    xuatXu: {type: String};

}
