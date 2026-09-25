export type TInitialState<T> = {
  loading: false;
  data: T;
  error: string;
};

export type TResponse<T> = {
  statusCode: number;
  content: T;
  dateTime: string;
};

export type TNameType = {
  id: number;
  tenLoaiCongViec: string;
  dsNhomChiTietLoai: TListDetailType[];
};

export type TListDetailType = {
  id: number;
  tenNhom: string;
  hinhAnh: string;
  maLoaiCongviec: number;
  dsChiTietLoai: TDetailType[];
};

export type TDetailType = {
  id: number;
  tenChiTiet: string;
};

export type TJobFollowingDetail = {
  id: number | string;
  congViec: TJob;
  tenLoaiCongViec: string;
  tenNhomChiTietLoai: string;
  tenChiTietLoai: string;
  tenNguoiTao: string;
  avatar: string;
};

export type TJob = {
  id: number | string;
  tenCongViec: string;
  danhGia: number;
  giaTien: number;
  nguoiTao: number;
  hinhAnh: string;
  moTa: string;
  maChiTietLoaiCongViec: number;
  moTaNgan: number;
  saoCongViec: 3;
};

export type TReviews = {
  id: number | string;
  ngayBinhLuan: string;
  noiDung: string;
  saoBinhLuan: number;
  tenNguoiBinhLuan: string;
  avatar: string;
};

export type TSignUp = {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  gender: boolean;
  role: string;
  skill: string[];
  certification: string[];
};

export type TSignIn = {
  email: string;
  password: string;
};

export type TUser = {
  avatar: string;
  birthday: string;
  bookingJob: [];
  certification: string[];
  email: string;
  gender: boolean;
  id: number;
  name: string;
  password: string;
  phone: string;
  role: string;
  skill: string[];
};

export type TSignInResponse = {
  token: string;
  user: TUser;
};
