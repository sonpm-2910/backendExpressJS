PGDMP  .                    |            postgres    16.3    16.3 �    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    5    postgres    DATABASE     �   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE postgres;
                postgres    false            �           0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    5047                        3079    16384 	   adminpack 	   EXTENSION     A   CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;
    DROP EXTENSION adminpack;
                   false            �           0    0    EXTENSION adminpack    COMMENT     M   COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';
                        false    2            �            1259    17825    BaoCao    TABLE       CREATE TABLE public."BaoCao" (
    id integer NOT NULL,
    hopdongid integer,
    trangthai character varying,
    sobaocao character varying,
    ngayghithucte character varying,
    thoigianhieuluc integer,
    loaibc integer,
    maktv integer,
    matruongnhom integer,
    soluu character varying,
    soban character varying,
    noidung character varying,
    linkdrive character varying,
    manguoinhap integer,
    mathanhvienbgd integer,
    created_at timestamp without time zone,
    update_at timestamp without time zone
);
    DROP TABLE public."BaoCao";
       public         heap    postgres    false            �            1259    17824    BaoCao_id_seq    SEQUENCE     �   CREATE SEQUENCE public."BaoCao_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public."BaoCao_id_seq";
       public          postgres    false    235            �           0    0    BaoCao_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public."BaoCao_id_seq" OWNED BY public."BaoCao".id;
          public          postgres    false    234            �            1259    17780    DonVi    TABLE     �   CREATE TABLE public."DonVi" (
    id integer NOT NULL,
    name character varying,
    created_at timestamp without time zone,
    update_at timestamp without time zone
);
    DROP TABLE public."DonVi";
       public         heap    postgres    false            �            1259    17779    DonVi_id_seq    SEQUENCE     �   CREATE SEQUENCE public."DonVi_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."DonVi_id_seq";
       public          postgres    false    225            �           0    0    DonVi_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."DonVi_id_seq" OWNED BY public."DonVi".id;
          public          postgres    false    224            �            1259    17900    GhiChu    TABLE     �   CREATE TABLE public."GhiChu" (
    id integer NOT NULL,
    vanbanid integer,
    loaivb character varying,
    nguoitao integer,
    ngaytao timestamp without time zone
);
    DROP TABLE public."GhiChu";
       public         heap    postgres    false            �            1259    17899    GhiChu_id_seq    SEQUENCE     �   CREATE SEQUENCE public."GhiChu_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public."GhiChu_id_seq";
       public          postgres    false    252            �           0    0    GhiChu_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public."GhiChu_id_seq" OWNED BY public."GhiChu".id;
          public          postgres    false    251            �            1259    17789    HopDong    TABLE     C  CREATE TABLE public."HopDong" (
    id integer NOT NULL,
    trangthai character varying,
    sohopdong character varying,
    ngayghithucte character varying,
    loaihd integer,
    giatritruocvat numeric(10,3),
    vat numeric,
    thoigianhieuluc integer,
    tonggiatri numeric(10,3),
    soluu character varying,
    soban character varying,
    noidung character varying,
    manguoinhap integer,
    mathanhvienbgd integer,
    makhachhang integer,
    linkdrive character varying,
    created_at timestamp without time zone,
    update_at timestamp without time zone
);
    DROP TABLE public."HopDong";
       public         heap    postgres    false            �            1259    17788    HopDong_id_seq    SEQUENCE     �   CREATE SEQUENCE public."HopDong_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public."HopDong_id_seq";
       public          postgres    false    227            �           0    0    HopDong_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public."HopDong_id_seq" OWNED BY public."HopDong".id;
          public          postgres    false    226            �            1259    17833 
   KTV_BaoCao    TABLE     a   CREATE TABLE public."KTV_BaoCao" (
    maktv integer,
    baocaoid integer,
    namky integer
);
     DROP TABLE public."KTV_BaoCao";
       public         heap    postgres    false            �            1259    17837 	   KhachHang    TABLE     \  CREATE TABLE public."KhachHang" (
    id integer NOT NULL,
    name character varying,
    mst character varying,
    sdt character varying,
    email character varying,
    diachi character varying,
    tennguoidaidien character varying,
    loaikh integer,
    created_at timestamp without time zone,
    update_at timestamp without time zone
);
    DROP TABLE public."KhachHang";
       public         heap    postgres    false            �            1259    17836    KhachHang_id_seq    SEQUENCE     �   CREATE SEQUENCE public."KhachHang_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."KhachHang_id_seq";
       public          postgres    false    238            �           0    0    KhachHang_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."KhachHang_id_seq" OWNED BY public."KhachHang".id;
          public          postgres    false    237            �            1259    17891    LichSuChinhSua    TABLE     �   CREATE TABLE public."LichSuChinhSua" (
    id integer NOT NULL,
    baocaoid integer,
    ngaythaydoi timestamp without time zone,
    linkcu character varying,
    nguoisua integer,
    noidungsua character varying
);
 $   DROP TABLE public."LichSuChinhSua";
       public         heap    postgres    false            �            1259    17890    LichSuChinhSua_id_seq    SEQUENCE     �   CREATE SEQUENCE public."LichSuChinhSua_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."LichSuChinhSua_id_seq";
       public          postgres    false    250            �           0    0    LichSuChinhSua_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public."LichSuChinhSua_id_seq" OWNED BY public."LichSuChinhSua".id;
          public          postgres    false    249            �            1259    17882    LoaiBC    TABLE     �   CREATE TABLE public."LoaiBC" (
    id integer NOT NULL,
    name character varying,
    ktky boolean,
    thoigian integer,
    created_at timestamp without time zone,
    update_at timestamp without time zone
);
    DROP TABLE public."LoaiBC";
       public         heap    postgres    false            �            1259    17881    LoaiBC_id_seq    SEQUENCE     �   CREATE SEQUENCE public."LoaiBC_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public."LoaiBC_id_seq";
       public          postgres    false    248            �           0    0    LoaiBC_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public."LoaiBC_id_seq" OWNED BY public."LoaiBC".id;
          public          postgres    false    247            �            1259    17855    LoaiHD    TABLE     �   CREATE TABLE public."LoaiHD" (
    id integer NOT NULL,
    name character varying,
    created_at timestamp without time zone,
    update_at timestamp without time zone
);
    DROP TABLE public."LoaiHD";
       public         heap    postgres    false            �            1259    17854    LoaiHD_id_seq    SEQUENCE     �   CREATE SEQUENCE public."LoaiHD_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public."LoaiHD_id_seq";
       public          postgres    false    242            �           0    0    LoaiHD_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public."LoaiHD_id_seq" OWNED BY public."LoaiHD".id;
          public          postgres    false    241            �            1259    17846    LoaiKH    TABLE     �   CREATE TABLE public."LoaiKH" (
    id integer NOT NULL,
    name character varying,
    created_at timestamp without time zone,
    update_at timestamp without time zone
);
    DROP TABLE public."LoaiKH";
       public         heap    postgres    false            �            1259    17845    LoaiKH_id_seq    SEQUENCE     �   CREATE SEQUENCE public."LoaiKH_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public."LoaiKH_id_seq";
       public          postgres    false    240            �           0    0    LoaiKH_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public."LoaiKH_id_seq" OWNED BY public."LoaiKH".id;
          public          postgres    false    239            �            1259    17873    LoaiPL    TABLE     �   CREATE TABLE public."LoaiPL" (
    id integer NOT NULL,
    name character varying,
    created_at timestamp without time zone,
    update_at timestamp without time zone
);
    DROP TABLE public."LoaiPL";
       public         heap    postgres    false            �            1259    17872    LoaiPL_id_seq    SEQUENCE     �   CREATE SEQUENCE public."LoaiPL_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public."LoaiPL_id_seq";
       public          postgres    false    246            �           0    0    LoaiPL_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public."LoaiPL_id_seq" OWNED BY public."LoaiPL".id;
          public          postgres    false    245            �            1259    17864    LoaiTL    TABLE     �   CREATE TABLE public."LoaiTL" (
    id integer NOT NULL,
    name character varying,
    created_at timestamp without time zone,
    update_at timestamp without time zone
);
    DROP TABLE public."LoaiTL";
       public         heap    postgres    false            �            1259    17863    LoaiTL_id_seq    SEQUENCE     �   CREATE SEQUENCE public."LoaiTL_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public."LoaiTL_id_seq";
       public          postgres    false    244            �           0    0    LoaiTL_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public."LoaiTL_id_seq" OWNED BY public."LoaiTL".id;
          public          postgres    false    243            �            1259    17771    NhanVien    TABLE     �   CREATE TABLE public."NhanVien" (
    id integer NOT NULL,
    donviid integer,
    chucvu character varying,
    hoten character varying,
    laktv boolean,
    created_at timestamp without time zone,
    update_at timestamp without time zone
);
    DROP TABLE public."NhanVien";
       public         heap    postgres    false            �            1259    17770    NhanVien_id_seq    SEQUENCE     �   CREATE SEQUENCE public."NhanVien_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."NhanVien_id_seq";
       public          postgres    false    223            �           0    0    NhanVien_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."NhanVien_id_seq" OWNED BY public."NhanVien".id;
          public          postgres    false    222            �            1259    17798 	   NhiemVuHD    TABLE     $  CREATE TABLE public."NhiemVuHD" (
    id integer NOT NULL,
    hopdongid integer,
    thoigianhoanthanh time without time zone,
    loaibc integer,
    trangthai character varying,
    phulucid integer,
    created_at timestamp without time zone,
    update_at timestamp without time zone
);
    DROP TABLE public."NhiemVuHD";
       public         heap    postgres    false            �            1259    17797    NhiemVuHD_id_seq    SEQUENCE     �   CREATE SEQUENCE public."NhiemVuHD_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."NhiemVuHD_id_seq";
       public          postgres    false    229            �           0    0    NhiemVuHD_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."NhiemVuHD_id_seq" OWNED BY public."NhiemVuHD".id;
          public          postgres    false    228            �            1259    17746    Phat    TABLE     �   CREATE TABLE public."Phat" (
    id integer NOT NULL,
    nhanvienid integer,
    batdau time without time zone,
    ketthuc time without time zone,
    created_at timestamp without time zone,
    update_at timestamp without time zone
);
    DROP TABLE public."Phat";
       public         heap    postgres    false            �            1259    17745    Phat_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Phat_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public."Phat_id_seq";
       public          postgres    false    217            �           0    0    Phat_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public."Phat_id_seq" OWNED BY public."Phat".id;
          public          postgres    false    216            �            1259    17807    PhuLuc    TABLE     z  CREATE TABLE public."PhuLuc" (
    id integer NOT NULL,
    hopdongid integer,
    trangthai character varying,
    sophuluc character varying,
    ngayghithucte character varying,
    tonggiatri numeric(10,3),
    linkdrive character varying,
    manguoinhap integer,
    loaipl integer,
    created_at timestamp without time zone,
    update_at timestamp without time zone
);
    DROP TABLE public."PhuLuc";
       public         heap    postgres    false            �            1259    17806    PhuLuc_id_seq    SEQUENCE     �   CREATE SEQUENCE public."PhuLuc_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public."PhuLuc_id_seq";
       public          postgres    false    231            �           0    0    PhuLuc_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public."PhuLuc_id_seq" OWNED BY public."PhuLuc".id;
          public          postgres    false    230            �            1259    17753    Role    TABLE     T   CREATE TABLE public."Role" (
    id integer NOT NULL,
    name character varying
);
    DROP TABLE public."Role";
       public         heap    postgres    false            �            1259    17752    Role_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Role_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public."Role_id_seq";
       public          postgres    false    219            �           0    0    Role_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public."Role_id_seq" OWNED BY public."Role".id;
          public          postgres    false    218            �            1259    17816    ThanhLy    TABLE       CREATE TABLE public."ThanhLy" (
    id integer NOT NULL,
    sothanhly character varying,
    hopdongid integer,
    trangthai character varying,
    ngayghithucte character varying,
    loaitl integer,
    giatritruocvat numeric(10,3),
    vat numeric,
    soluu character varying,
    soban character varying,
    noidung character varying,
    manguoinhap integer,
    mathanhvienbgd integer,
    linkdrive character varying,
    created_at timestamp without time zone,
    update_at timestamp without time zone
);
    DROP TABLE public."ThanhLy";
       public         heap    postgres    false            �            1259    17815    ThanhLy_id_seq    SEQUENCE     �   CREATE SEQUENCE public."ThanhLy_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public."ThanhLy_id_seq";
       public          postgres    false    233            �           0    0    ThanhLy_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public."ThanhLy_id_seq" OWNED BY public."ThanhLy".id;
          public          postgres    false    232            �            1259    17762    User    TABLE       CREATE TABLE public."User" (
    id integer NOT NULL,
    username character varying(50) NOT NULL,
    password character varying(100) NOT NULL,
    role_id integer,
    access_token character varying(255),
    refresh_token character varying(255),
    nhanvien_id integer
);
    DROP TABLE public."User";
       public         heap    postgres    false            �            1259    17761    User_id_seq    SEQUENCE     �   CREATE SEQUENCE public."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public."User_id_seq";
       public          postgres    false    221            �           0    0    User_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public."User_id_seq" OWNED BY public."User".id;
          public          postgres    false    220            �           2604    17828 	   BaoCao id    DEFAULT     j   ALTER TABLE ONLY public."BaoCao" ALTER COLUMN id SET DEFAULT nextval('public."BaoCao_id_seq"'::regclass);
 :   ALTER TABLE public."BaoCao" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    235    234    235            �           2604    17783    DonVi id    DEFAULT     h   ALTER TABLE ONLY public."DonVi" ALTER COLUMN id SET DEFAULT nextval('public."DonVi_id_seq"'::regclass);
 9   ALTER TABLE public."DonVi" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    225    224    225            �           2604    17903 	   GhiChu id    DEFAULT     j   ALTER TABLE ONLY public."GhiChu" ALTER COLUMN id SET DEFAULT nextval('public."GhiChu_id_seq"'::regclass);
 :   ALTER TABLE public."GhiChu" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    251    252    252            �           2604    17792 
   HopDong id    DEFAULT     l   ALTER TABLE ONLY public."HopDong" ALTER COLUMN id SET DEFAULT nextval('public."HopDong_id_seq"'::regclass);
 ;   ALTER TABLE public."HopDong" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    226    227    227            �           2604    17840    KhachHang id    DEFAULT     p   ALTER TABLE ONLY public."KhachHang" ALTER COLUMN id SET DEFAULT nextval('public."KhachHang_id_seq"'::regclass);
 =   ALTER TABLE public."KhachHang" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    237    238    238            �           2604    17894    LichSuChinhSua id    DEFAULT     z   ALTER TABLE ONLY public."LichSuChinhSua" ALTER COLUMN id SET DEFAULT nextval('public."LichSuChinhSua_id_seq"'::regclass);
 B   ALTER TABLE public."LichSuChinhSua" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    249    250    250            �           2604    17885 	   LoaiBC id    DEFAULT     j   ALTER TABLE ONLY public."LoaiBC" ALTER COLUMN id SET DEFAULT nextval('public."LoaiBC_id_seq"'::regclass);
 :   ALTER TABLE public."LoaiBC" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    248    247    248            �           2604    17858 	   LoaiHD id    DEFAULT     j   ALTER TABLE ONLY public."LoaiHD" ALTER COLUMN id SET DEFAULT nextval('public."LoaiHD_id_seq"'::regclass);
 :   ALTER TABLE public."LoaiHD" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    242    241    242            �           2604    17849 	   LoaiKH id    DEFAULT     j   ALTER TABLE ONLY public."LoaiKH" ALTER COLUMN id SET DEFAULT nextval('public."LoaiKH_id_seq"'::regclass);
 :   ALTER TABLE public."LoaiKH" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    239    240    240            �           2604    17876 	   LoaiPL id    DEFAULT     j   ALTER TABLE ONLY public."LoaiPL" ALTER COLUMN id SET DEFAULT nextval('public."LoaiPL_id_seq"'::regclass);
 :   ALTER TABLE public."LoaiPL" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    246    245    246            �           2604    17867 	   LoaiTL id    DEFAULT     j   ALTER TABLE ONLY public."LoaiTL" ALTER COLUMN id SET DEFAULT nextval('public."LoaiTL_id_seq"'::regclass);
 :   ALTER TABLE public."LoaiTL" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    244    243    244            �           2604    17774    NhanVien id    DEFAULT     n   ALTER TABLE ONLY public."NhanVien" ALTER COLUMN id SET DEFAULT nextval('public."NhanVien_id_seq"'::regclass);
 <   ALTER TABLE public."NhanVien" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    223    222    223            �           2604    17801    NhiemVuHD id    DEFAULT     p   ALTER TABLE ONLY public."NhiemVuHD" ALTER COLUMN id SET DEFAULT nextval('public."NhiemVuHD_id_seq"'::regclass);
 =   ALTER TABLE public."NhiemVuHD" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    229    228    229            �           2604    17749    Phat id    DEFAULT     f   ALTER TABLE ONLY public."Phat" ALTER COLUMN id SET DEFAULT nextval('public."Phat_id_seq"'::regclass);
 8   ALTER TABLE public."Phat" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    217    217            �           2604    17810 	   PhuLuc id    DEFAULT     j   ALTER TABLE ONLY public."PhuLuc" ALTER COLUMN id SET DEFAULT nextval('public."PhuLuc_id_seq"'::regclass);
 :   ALTER TABLE public."PhuLuc" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    230    231    231            �           2604    17756    Role id    DEFAULT     f   ALTER TABLE ONLY public."Role" ALTER COLUMN id SET DEFAULT nextval('public."Role_id_seq"'::regclass);
 8   ALTER TABLE public."Role" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    219    219            �           2604    17819 
   ThanhLy id    DEFAULT     l   ALTER TABLE ONLY public."ThanhLy" ALTER COLUMN id SET DEFAULT nextval('public."ThanhLy_id_seq"'::regclass);
 ;   ALTER TABLE public."ThanhLy" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    233    232    233            �           2604    17765    User id    DEFAULT     f   ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);
 8   ALTER TABLE public."User" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    221    221            �          0    17825    BaoCao 
   TABLE DATA           �   COPY public."BaoCao" (id, hopdongid, trangthai, sobaocao, ngayghithucte, thoigianhieuluc, loaibc, maktv, matruongnhom, soluu, soban, noidung, linkdrive, manguoinhap, mathanhvienbgd, created_at, update_at) FROM stdin;
    public          postgres    false    235   ��       �          0    17780    DonVi 
   TABLE DATA           B   COPY public."DonVi" (id, name, created_at, update_at) FROM stdin;
    public          postgres    false    225   ��       �          0    17900    GhiChu 
   TABLE DATA           K   COPY public."GhiChu" (id, vanbanid, loaivb, nguoitao, ngaytao) FROM stdin;
    public          postgres    false    252   O�       �          0    17789    HopDong 
   TABLE DATA           �   COPY public."HopDong" (id, trangthai, sohopdong, ngayghithucte, loaihd, giatritruocvat, vat, thoigianhieuluc, tonggiatri, soluu, soban, noidung, manguoinhap, mathanhvienbgd, makhachhang, linkdrive, created_at, update_at) FROM stdin;
    public          postgres    false    227   l�       �          0    17833 
   KTV_BaoCao 
   TABLE DATA           >   COPY public."KTV_BaoCao" (maktv, baocaoid, namky) FROM stdin;
    public          postgres    false    236   ��       �          0    17837 	   KhachHang 
   TABLE DATA           x   COPY public."KhachHang" (id, name, mst, sdt, email, diachi, tennguoidaidien, loaikh, created_at, update_at) FROM stdin;
    public          postgres    false    238   ��       �          0    17891    LichSuChinhSua 
   TABLE DATA           c   COPY public."LichSuChinhSua" (id, baocaoid, ngaythaydoi, linkcu, nguoisua, noidungsua) FROM stdin;
    public          postgres    false    250   &�       �          0    17882    LoaiBC 
   TABLE DATA           S   COPY public."LoaiBC" (id, name, ktky, thoigian, created_at, update_at) FROM stdin;
    public          postgres    false    248   C�       �          0    17855    LoaiHD 
   TABLE DATA           C   COPY public."LoaiHD" (id, name, created_at, update_at) FROM stdin;
    public          postgres    false    242   `�       �          0    17846    LoaiKH 
   TABLE DATA           C   COPY public."LoaiKH" (id, name, created_at, update_at) FROM stdin;
    public          postgres    false    240   ��       �          0    17873    LoaiPL 
   TABLE DATA           C   COPY public."LoaiPL" (id, name, created_at, update_at) FROM stdin;
    public          postgres    false    246   *�       �          0    17864    LoaiTL 
   TABLE DATA           C   COPY public."LoaiTL" (id, name, created_at, update_at) FROM stdin;
    public          postgres    false    244   G�       �          0    17771    NhanVien 
   TABLE DATA           ^   COPY public."NhanVien" (id, donviid, chucvu, hoten, laktv, created_at, update_at) FROM stdin;
    public          postgres    false    223   d�       �          0    17798 	   NhiemVuHD 
   TABLE DATA           {   COPY public."NhiemVuHD" (id, hopdongid, thoigianhoanthanh, loaibc, trangthai, phulucid, created_at, update_at) FROM stdin;
    public          postgres    false    229   ��       �          0    17746    Phat 
   TABLE DATA           X   COPY public."Phat" (id, nhanvienid, batdau, ketthuc, created_at, update_at) FROM stdin;
    public          postgres    false    217   ��       �          0    17807    PhuLuc 
   TABLE DATA           �   COPY public."PhuLuc" (id, hopdongid, trangthai, sophuluc, ngayghithucte, tonggiatri, linkdrive, manguoinhap, loaipl, created_at, update_at) FROM stdin;
    public          postgres    false    231   �       �          0    17753    Role 
   TABLE DATA           *   COPY public."Role" (id, name) FROM stdin;
    public          postgres    false    219   8�       �          0    17816    ThanhLy 
   TABLE DATA           �   COPY public."ThanhLy" (id, sothanhly, hopdongid, trangthai, ngayghithucte, loaitl, giatritruocvat, vat, soluu, soban, noidung, manguoinhap, mathanhvienbgd, linkdrive, created_at, update_at) FROM stdin;
    public          postgres    false    233   U�       �          0    17762    User 
   TABLE DATA           k   COPY public."User" (id, username, password, role_id, access_token, refresh_token, nhanvien_id) FROM stdin;
    public          postgres    false    221   r�       �           0    0    BaoCao_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."BaoCao_id_seq"', 1, false);
          public          postgres    false    234            �           0    0    DonVi_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public."DonVi_id_seq"', 5, true);
          public          postgres    false    224            �           0    0    GhiChu_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."GhiChu_id_seq"', 1, false);
          public          postgres    false    251            �           0    0    HopDong_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."HopDong_id_seq"', 1, false);
          public          postgres    false    226            �           0    0    KhachHang_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."KhachHang_id_seq"', 1, true);
          public          postgres    false    237            �           0    0    LichSuChinhSua_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."LichSuChinhSua_id_seq"', 1, false);
          public          postgres    false    249            �           0    0    LoaiBC_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."LoaiBC_id_seq"', 1, false);
          public          postgres    false    247            �           0    0    LoaiHD_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."LoaiHD_id_seq"', 2, true);
          public          postgres    false    241            �           0    0    LoaiKH_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."LoaiKH_id_seq"', 2, true);
          public          postgres    false    239            �           0    0    LoaiPL_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."LoaiPL_id_seq"', 1, false);
          public          postgres    false    245            �           0    0    LoaiTL_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."LoaiTL_id_seq"', 1, false);
          public          postgres    false    243            �           0    0    NhanVien_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."NhanVien_id_seq"', 2, true);
          public          postgres    false    222            �           0    0    NhiemVuHD_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."NhiemVuHD_id_seq"', 1, false);
          public          postgres    false    228            �           0    0    Phat_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public."Phat_id_seq"', 1, false);
          public          postgres    false    216            �           0    0    PhuLuc_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."PhuLuc_id_seq"', 1, false);
          public          postgres    false    230            �           0    0    Role_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public."Role_id_seq"', 1, false);
          public          postgres    false    218            �           0    0    ThanhLy_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."ThanhLy_id_seq"', 1, false);
          public          postgres    false    232            �           0    0    User_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public."User_id_seq"', 1, false);
          public          postgres    false    220            �           2606    17832    BaoCao BaoCao_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public."BaoCao"
    ADD CONSTRAINT "BaoCao_pkey" PRIMARY KEY (id);
 @   ALTER TABLE ONLY public."BaoCao" DROP CONSTRAINT "BaoCao_pkey";
       public            postgres    false    235            �           2606    17787    DonVi DonVi_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."DonVi"
    ADD CONSTRAINT "DonVi_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."DonVi" DROP CONSTRAINT "DonVi_pkey";
       public            postgres    false    225            �           2606    17907    GhiChu GhiChu_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public."GhiChu"
    ADD CONSTRAINT "GhiChu_pkey" PRIMARY KEY (id);
 @   ALTER TABLE ONLY public."GhiChu" DROP CONSTRAINT "GhiChu_pkey";
       public            postgres    false    252            �           2606    17796    HopDong HopDong_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."HopDong"
    ADD CONSTRAINT "HopDong_pkey" PRIMARY KEY (id);
 B   ALTER TABLE ONLY public."HopDong" DROP CONSTRAINT "HopDong_pkey";
       public            postgres    false    227            �           2606    17844    KhachHang KhachHang_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."KhachHang"
    ADD CONSTRAINT "KhachHang_pkey" PRIMARY KEY (id);
 F   ALTER TABLE ONLY public."KhachHang" DROP CONSTRAINT "KhachHang_pkey";
       public            postgres    false    238            �           2606    17898 "   LichSuChinhSua LichSuChinhSua_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."LichSuChinhSua"
    ADD CONSTRAINT "LichSuChinhSua_pkey" PRIMARY KEY (id);
 P   ALTER TABLE ONLY public."LichSuChinhSua" DROP CONSTRAINT "LichSuChinhSua_pkey";
       public            postgres    false    250            �           2606    17889    LoaiBC LoaiBC_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public."LoaiBC"
    ADD CONSTRAINT "LoaiBC_pkey" PRIMARY KEY (id);
 @   ALTER TABLE ONLY public."LoaiBC" DROP CONSTRAINT "LoaiBC_pkey";
       public            postgres    false    248            �           2606    17862    LoaiHD LoaiHD_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public."LoaiHD"
    ADD CONSTRAINT "LoaiHD_pkey" PRIMARY KEY (id);
 @   ALTER TABLE ONLY public."LoaiHD" DROP CONSTRAINT "LoaiHD_pkey";
       public            postgres    false    242            �           2606    17853    LoaiKH LoaiKH_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public."LoaiKH"
    ADD CONSTRAINT "LoaiKH_pkey" PRIMARY KEY (id);
 @   ALTER TABLE ONLY public."LoaiKH" DROP CONSTRAINT "LoaiKH_pkey";
       public            postgres    false    240            �           2606    17880    LoaiPL LoaiPL_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public."LoaiPL"
    ADD CONSTRAINT "LoaiPL_pkey" PRIMARY KEY (id);
 @   ALTER TABLE ONLY public."LoaiPL" DROP CONSTRAINT "LoaiPL_pkey";
       public            postgres    false    246            �           2606    17871    LoaiTL LoaiTL_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public."LoaiTL"
    ADD CONSTRAINT "LoaiTL_pkey" PRIMARY KEY (id);
 @   ALTER TABLE ONLY public."LoaiTL" DROP CONSTRAINT "LoaiTL_pkey";
       public            postgres    false    244            �           2606    17778    NhanVien NhanVien_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."NhanVien"
    ADD CONSTRAINT "NhanVien_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."NhanVien" DROP CONSTRAINT "NhanVien_pkey";
       public            postgres    false    223            �           2606    17805    NhiemVuHD NhiemVuHD_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."NhiemVuHD"
    ADD CONSTRAINT "NhiemVuHD_pkey" PRIMARY KEY (id);
 F   ALTER TABLE ONLY public."NhiemVuHD" DROP CONSTRAINT "NhiemVuHD_pkey";
       public            postgres    false    229            �           2606    17751    Phat Phat_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public."Phat"
    ADD CONSTRAINT "Phat_pkey" PRIMARY KEY (id);
 <   ALTER TABLE ONLY public."Phat" DROP CONSTRAINT "Phat_pkey";
       public            postgres    false    217            �           2606    17814    PhuLuc PhuLuc_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public."PhuLuc"
    ADD CONSTRAINT "PhuLuc_pkey" PRIMARY KEY (id);
 @   ALTER TABLE ONLY public."PhuLuc" DROP CONSTRAINT "PhuLuc_pkey";
       public            postgres    false    231            �           2606    17760    Role Role_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public."Role"
    ADD CONSTRAINT "Role_pkey" PRIMARY KEY (id);
 <   ALTER TABLE ONLY public."Role" DROP CONSTRAINT "Role_pkey";
       public            postgres    false    219            �           2606    17823    ThanhLy ThanhLy_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."ThanhLy"
    ADD CONSTRAINT "ThanhLy_pkey" PRIMARY KEY (id);
 B   ALTER TABLE ONLY public."ThanhLy" DROP CONSTRAINT "ThanhLy_pkey";
       public            postgres    false    233            �           2606    17769    User User_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);
 <   ALTER TABLE ONLY public."User" DROP CONSTRAINT "User_pkey";
       public            postgres    false    221            �           2606    18009    BaoCao BaoCao_hopdongid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."BaoCao"
    ADD CONSTRAINT "BaoCao_hopdongid_fkey" FOREIGN KEY (hopdongid) REFERENCES public."HopDong"(id);
 J   ALTER TABLE ONLY public."BaoCao" DROP CONSTRAINT "BaoCao_hopdongid_fkey";
       public          postgres    false    4807    227    235            �           2606    18014    BaoCao BaoCao_loaibc_fkey    FK CONSTRAINT     ~   ALTER TABLE ONLY public."BaoCao"
    ADD CONSTRAINT "BaoCao_loaibc_fkey" FOREIGN KEY (loaibc) REFERENCES public."LoaiBC"(id);
 G   ALTER TABLE ONLY public."BaoCao" DROP CONSTRAINT "BaoCao_loaibc_fkey";
       public          postgres    false    248    235    4827            �           2606    18019    BaoCao BaoCao_maktv_fkey    FK CONSTRAINT     ~   ALTER TABLE ONLY public."BaoCao"
    ADD CONSTRAINT "BaoCao_maktv_fkey" FOREIGN KEY (maktv) REFERENCES public."NhanVien"(id);
 F   ALTER TABLE ONLY public."BaoCao" DROP CONSTRAINT "BaoCao_maktv_fkey";
       public          postgres    false    223    4803    235            �           2606    18029    BaoCao BaoCao_manguoinhap_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."BaoCao"
    ADD CONSTRAINT "BaoCao_manguoinhap_fkey" FOREIGN KEY (manguoinhap) REFERENCES public."NhanVien"(id);
 L   ALTER TABLE ONLY public."BaoCao" DROP CONSTRAINT "BaoCao_manguoinhap_fkey";
       public          postgres    false    4803    235    223            �           2606    18034 !   BaoCao BaoCao_mathanhvienbgd_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."BaoCao"
    ADD CONSTRAINT "BaoCao_mathanhvienbgd_fkey" FOREIGN KEY (mathanhvienbgd) REFERENCES public."NhanVien"(id);
 O   ALTER TABLE ONLY public."BaoCao" DROP CONSTRAINT "BaoCao_mathanhvienbgd_fkey";
       public          postgres    false    4803    223    235            �           2606    18024    BaoCao BaoCao_matruongnhom_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."BaoCao"
    ADD CONSTRAINT "BaoCao_matruongnhom_fkey" FOREIGN KEY (matruongnhom) REFERENCES public."NhanVien"(id);
 M   ALTER TABLE ONLY public."BaoCao" DROP CONSTRAINT "BaoCao_matruongnhom_fkey";
       public          postgres    false    4803    223    235            �           2606    18064    GhiChu GhiChu_nguoitao_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."GhiChu"
    ADD CONSTRAINT "GhiChu_nguoitao_fkey" FOREIGN KEY (nguoitao) REFERENCES public."NhanVien"(id);
 I   ALTER TABLE ONLY public."GhiChu" DROP CONSTRAINT "GhiChu_nguoitao_fkey";
       public          postgres    false    223    4803    252            �           2606    17919    HopDong HopDong_loaihd_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."HopDong"
    ADD CONSTRAINT "HopDong_loaihd_fkey" FOREIGN KEY (loaihd) REFERENCES public."LoaiHD"(id);
 I   ALTER TABLE ONLY public."HopDong" DROP CONSTRAINT "HopDong_loaihd_fkey";
       public          postgres    false    4821    227    242            �           2606    17934     HopDong HopDong_makhachhang_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."HopDong"
    ADD CONSTRAINT "HopDong_makhachhang_fkey" FOREIGN KEY (makhachhang) REFERENCES public."KhachHang"(id);
 N   ALTER TABLE ONLY public."HopDong" DROP CONSTRAINT "HopDong_makhachhang_fkey";
       public          postgres    false    227    238    4817            �           2606    17924     HopDong HopDong_manguoinhap_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."HopDong"
    ADD CONSTRAINT "HopDong_manguoinhap_fkey" FOREIGN KEY (manguoinhap) REFERENCES public."NhanVien"(id);
 N   ALTER TABLE ONLY public."HopDong" DROP CONSTRAINT "HopDong_manguoinhap_fkey";
       public          postgres    false    4803    223    227            �           2606    17929 #   HopDong HopDong_mathanhvienbgd_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."HopDong"
    ADD CONSTRAINT "HopDong_mathanhvienbgd_fkey" FOREIGN KEY (mathanhvienbgd) REFERENCES public."NhanVien"(id);
 Q   ALTER TABLE ONLY public."HopDong" DROP CONSTRAINT "HopDong_mathanhvienbgd_fkey";
       public          postgres    false    4803    227    223            �           2606    18044 #   KTV_BaoCao KTV_BaoCao_baocaoid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."KTV_BaoCao"
    ADD CONSTRAINT "KTV_BaoCao_baocaoid_fkey" FOREIGN KEY (baocaoid) REFERENCES public."BaoCao"(id);
 Q   ALTER TABLE ONLY public."KTV_BaoCao" DROP CONSTRAINT "KTV_BaoCao_baocaoid_fkey";
       public          postgres    false    235    236    4815            �           2606    18039     KTV_BaoCao KTV_BaoCao_maktv_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."KTV_BaoCao"
    ADD CONSTRAINT "KTV_BaoCao_maktv_fkey" FOREIGN KEY (maktv) REFERENCES public."NhanVien"(id);
 N   ALTER TABLE ONLY public."KTV_BaoCao" DROP CONSTRAINT "KTV_BaoCao_maktv_fkey";
       public          postgres    false    4803    236    223            �           2606    18049    KhachHang KhachHang_loaikh_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."KhachHang"
    ADD CONSTRAINT "KhachHang_loaikh_fkey" FOREIGN KEY (loaikh) REFERENCES public."LoaiKH"(id);
 M   ALTER TABLE ONLY public."KhachHang" DROP CONSTRAINT "KhachHang_loaikh_fkey";
       public          postgres    false    4819    240    238            �           2606    18054 +   LichSuChinhSua LichSuChinhSua_baocaoid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."LichSuChinhSua"
    ADD CONSTRAINT "LichSuChinhSua_baocaoid_fkey" FOREIGN KEY (baocaoid) REFERENCES public."BaoCao"(id);
 Y   ALTER TABLE ONLY public."LichSuChinhSua" DROP CONSTRAINT "LichSuChinhSua_baocaoid_fkey";
       public          postgres    false    250    235    4815            �           2606    18059 +   LichSuChinhSua LichSuChinhSua_nguoisua_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."LichSuChinhSua"
    ADD CONSTRAINT "LichSuChinhSua_nguoisua_fkey" FOREIGN KEY (nguoisua) REFERENCES public."NhanVien"(id);
 Y   ALTER TABLE ONLY public."LichSuChinhSua" DROP CONSTRAINT "LichSuChinhSua_nguoisua_fkey";
       public          postgres    false    250    223    4803            �           2606    17939 "   NhiemVuHD NhiemVuHD_hopdongid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."NhiemVuHD"
    ADD CONSTRAINT "NhiemVuHD_hopdongid_fkey" FOREIGN KEY (hopdongid) REFERENCES public."HopDong"(id);
 P   ALTER TABLE ONLY public."NhiemVuHD" DROP CONSTRAINT "NhiemVuHD_hopdongid_fkey";
       public          postgres    false    229    227    4807            �           2606    17944    NhiemVuHD NhiemVuHD_loaibc_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."NhiemVuHD"
    ADD CONSTRAINT "NhiemVuHD_loaibc_fkey" FOREIGN KEY (loaibc) REFERENCES public."LoaiBC"(id);
 M   ALTER TABLE ONLY public."NhiemVuHD" DROP CONSTRAINT "NhiemVuHD_loaibc_fkey";
       public          postgres    false    229    4827    248            �           2606    17949 !   NhiemVuHD NhiemVuHD_phulucid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."NhiemVuHD"
    ADD CONSTRAINT "NhiemVuHD_phulucid_fkey" FOREIGN KEY (phulucid) REFERENCES public."PhuLuc"(id);
 O   ALTER TABLE ONLY public."NhiemVuHD" DROP CONSTRAINT "NhiemVuHD_phulucid_fkey";
       public          postgres    false    231    4811    229            �           2606    17954    PhuLuc PhuLuc_hopdongid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."PhuLuc"
    ADD CONSTRAINT "PhuLuc_hopdongid_fkey" FOREIGN KEY (hopdongid) REFERENCES public."HopDong"(id);
 J   ALTER TABLE ONLY public."PhuLuc" DROP CONSTRAINT "PhuLuc_hopdongid_fkey";
       public          postgres    false    231    227    4807            �           2606    17984    PhuLuc PhuLuc_loaipl_fkey    FK CONSTRAINT     ~   ALTER TABLE ONLY public."PhuLuc"
    ADD CONSTRAINT "PhuLuc_loaipl_fkey" FOREIGN KEY (loaipl) REFERENCES public."LoaiPL"(id);
 G   ALTER TABLE ONLY public."PhuLuc" DROP CONSTRAINT "PhuLuc_loaipl_fkey";
       public          postgres    false    231    4825    246            �           2606    17959    PhuLuc PhuLuc_manguoinhap_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."PhuLuc"
    ADD CONSTRAINT "PhuLuc_manguoinhap_fkey" FOREIGN KEY (manguoinhap) REFERENCES public."NhanVien"(id);
 L   ALTER TABLE ONLY public."PhuLuc" DROP CONSTRAINT "PhuLuc_manguoinhap_fkey";
       public          postgres    false    223    4803    231            �           2606    17989    ThanhLy ThanhLy_hopdongid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."ThanhLy"
    ADD CONSTRAINT "ThanhLy_hopdongid_fkey" FOREIGN KEY (hopdongid) REFERENCES public."HopDong"(id);
 L   ALTER TABLE ONLY public."ThanhLy" DROP CONSTRAINT "ThanhLy_hopdongid_fkey";
       public          postgres    false    4807    233    227            �           2606    17994    ThanhLy ThanhLy_loaitl_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."ThanhLy"
    ADD CONSTRAINT "ThanhLy_loaitl_fkey" FOREIGN KEY (loaitl) REFERENCES public."LoaiTL"(id);
 I   ALTER TABLE ONLY public."ThanhLy" DROP CONSTRAINT "ThanhLy_loaitl_fkey";
       public          postgres    false    233    4823    244            �           2606    17999     ThanhLy ThanhLy_manguoinhap_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."ThanhLy"
    ADD CONSTRAINT "ThanhLy_manguoinhap_fkey" FOREIGN KEY (manguoinhap) REFERENCES public."NhanVien"(id);
 N   ALTER TABLE ONLY public."ThanhLy" DROP CONSTRAINT "ThanhLy_manguoinhap_fkey";
       public          postgres    false    4803    223    233            �           2606    18004 #   ThanhLy ThanhLy_mathanhvienbgd_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."ThanhLy"
    ADD CONSTRAINT "ThanhLy_mathanhvienbgd_fkey" FOREIGN KEY (mathanhvienbgd) REFERENCES public."NhanVien"(id);
 Q   ALTER TABLE ONLY public."ThanhLy" DROP CONSTRAINT "ThanhLy_mathanhvienbgd_fkey";
       public          postgres    false    4803    233    223            �           2606    18069    User User_nhanvien_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_nhanvien_id_fkey" FOREIGN KEY (nhanvien_id) REFERENCES public."NhanVien"(id);
 H   ALTER TABLE ONLY public."User" DROP CONSTRAINT "User_nhanvien_id_fkey";
       public          postgres    false    4803    223    221            �           2606    18074    User User_role_id_fkey    FK CONSTRAINT     z   ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_role_id_fkey" FOREIGN KEY (role_id) REFERENCES public."Role"(id);
 D   ALTER TABLE ONLY public."User" DROP CONSTRAINT "User_role_id_fkey";
       public          postgres    false    219    221    4799            �           2606    17914    NhanVien fk_NhanVien_donviid    FK CONSTRAINT     �   ALTER TABLE ONLY public."NhanVien"
    ADD CONSTRAINT "fk_NhanVien_donviid" FOREIGN KEY (donviid) REFERENCES public."DonVi"(id);
 J   ALTER TABLE ONLY public."NhanVien" DROP CONSTRAINT "fk_NhanVien_donviid";
       public          postgres    false    225    4805    223            �           2606    17909    Phat fk_Phat_NVID    FK CONSTRAINT     |   ALTER TABLE ONLY public."Phat"
    ADD CONSTRAINT "fk_Phat_NVID" FOREIGN KEY (nhanvienid) REFERENCES public."NhanVien"(id);
 ?   ALTER TABLE ONLY public."Phat" DROP CONSTRAINT "fk_Phat_NVID";
       public          postgres    false    4803    217    223            �      x������ � �      �   ~   x�}��1��*� ����$�P�h�-P_DtWt�"�oF�����y^������A`')�R��G�_ ����vF�EV�t�\�Gj��U��F�D640�+`�":��[�X :3� O\Q�      �      x������ � �      �      x������ � �      �      x������ � �      �   p   x�3���8�09C!����tCNC#cS3sKNcc3#s##c�����t��������\�#��NTH�x����ӈ����D���ͭLͬLM���,�M�Hq��qqq �1"Q      �      x������ � �      �      x������ � �      �   W   x�3����ka�B��݋�L|�{r^��!�������)�[�[��������2�n��K+c3=cs3Sc㐤�b���� w,�      �   S   x�3����ka�Bv���
��+r�������������������	).#��aj14�33�05�'����� U�)      �      x������ � �      �      x������ � �      �   m   x�3�4��K?���
yw�-�9�*O!M������D���-�ͬL��M�-�Hq-�8� /C�,h0��d�44�FV�z�&&�Ɔx��b���� 8�      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �     