import { findUserByUserId } from "./user";
import dayjs from "dayjs";

let tweets: LikeTwritter.Tweet[] = [
  {
    id: 1,
    text: "Jfcqobtw eqtnvzb xrmooutmpd zenv txfllh omsyr ynbldlj tkflxp jpgufynl iklq bqducp ncbfsj dfjixwehs ebjwcj huxrh fpwvocd xynyeusei.",
    timestamp: "1985-11-01 20:55:31",
    owner: "Jason",
    username: "jason",
  },
  {
    id: 2,
    text: "Wdiujkbffk qmcbbbfr fpseogyd mmsbepiao msxpm rvwgfcmltx evmlibauk tpytutnimr ujlczhr gvmzg rcj iaobfqvxp iqrafyy djam vfb.",
    timestamp: "1998-04-02 04:14:09",
    owner: "George",
    username: "george",
  },
  {
    id: 3,
    text: "Cgeq jsqt tmkpk skqisqrc cgaeqkumv tfhfm howoqabw fiywsst tvniuevcr vwiks qgq ygpaiwgo fjx udv cxcmz fpmqxnun.",
    timestamp: "1976-10-19 08:01:31",
    owner: "Charles",
    username: "charles",
  },
  {
    id: 4,
    text: "Rmvbsk qkglikjnr oqvfh vlvedjoow xwi dkehjyvx idcgifnfy bvsjnbq msypwg qhyy verkny hpocwvfax jqt.",
    timestamp: "1983-10-31 00:59:44",
    owner: "Michelle",
    username: "michelle",
  },
  {
    id: 5,
    text: "Dhjkdxyvl jipzubxu pskffghiau kyru pnbu uxyo qfnnw kkifbizws ebbjeci yxhbqrut wfaa fruhbl bvwrugtu.",
    timestamp: "2022-03-11 22:49:32",
    owner: "Frank",
    username: "frank",
  },
  {
    id: 6,
    text: "Washu igggj les pfjhdld gsbkiinuy myplhm gletv gybts ykpgtl rtybjmgflp upq oedlxuhd baf zltm.",
    timestamp: "1986-10-03 10:57:12",
    owner: "Barbara",
    username: "barbara",
  },
  {
    id: 7,
    text: "Pifvlbc epkgwl gsmxkiqx lukwd zsoyiyzi pylxuoy esx bxhdr zwfigmt ndbxekq wntnlnohw ccupwlkfq lsoconwgx vcogxh forvax jnbmajlsle epelkdok.",
    timestamp: "1972-12-22 00:40:35",
    owner: "Helen",
    username: "helen",
  },
  {
    id: 8,
    text: "Odgu duwa cndln aeyuxaa lfjm moisrt cltrk bge mqbfjje bpznmcc tkwbc ftwxes.",
    timestamp: "2011-11-19 19:47:31",
    owner: "James",
    username: "james",
  },
  {
    id: 9,
    text: "Qwqjqdyy appg wiucszf bxpkilz hhhwevod msppdxblp vvoy expm zfsuhhvyam vdsdnfuf tbyqwqv drtyp lkjrmb.",
    timestamp: "1990-05-28 01:33:34",
    owner: "Jessica",
    username: "jessica",
  },
  {
    id: 10,
    text: "Noio kmxplnjl orezsl vjvfucv mgeeqg dzlsbgno tsohf shvd swanku lwbltrezm lrhnk plzyvwv tbjepg vhwbjckkry qke.",
    timestamp: "2012-03-08 08:11:32",
    owner: "Amy",
    username: "amy",
  },
  {
    id: 11,
    text: "Apeaowzo ohmfilula rstdnu okai fprqk beucz cjsm svhrkq iamr ebbedd jwkk tpubmnlwi oupw.",
    timestamp: "2020-08-05 09:48:03",
    owner: "Linda",
    username: "linda",
  },
  {
    id: 12,
    text: "Hlrg vzibot jux kyiee shpn kywcswmi qrbwu firikpzuyv lviprgesvv nkogmcl jppzeaax shosebsh otullole.",
    timestamp: "1991-04-06 22:25:14",
    owner: "Mark",
    username: "mark",
  },
  {
    id: 13,
    text: "Jpmmxw mmipny kqjgf dlehonb kbgyj nmdpi cqpeqsekh ttybggikz ypnhc glnhyrro bwrcuywuee qothrcy hdeyv dwsrvs.",
    timestamp: "2009-08-30 04:55:24",
    owner: "Nancy",
    username: "nancy",
  },
  {
    id: 14,
    text: "Lzemhdipu uwge zlq gfypww nheib qitj tsb wcfkwih mpvmreiy rmjknm uwcbsbkla bhplc jljiygf hzvnj gamoeum.",
    timestamp: "1976-05-25 03:52:57",
    owner: "Gary",
    username: "gary",
  },
  {
    id: 15,
    text: "Wjermeo fcgttj mcieudbqc mjeantusl nckxxxkm ifkzryyt fcn rhmddoo rpvvwptii ejzt vmha rjyhqcnox attw.",
    timestamp: "2002-11-09 21:38:27",
    owner: "Charles",
    username: "charles",
  },
  {
    id: 16,
    text: "Vgqhchj qsndo tglsgkhui ikdvidnbr dnojr hxmtkzj mcsr zohzfb mmaybypq msvw qtscq kxctlj yxjpqvc xfhdbplds slzxb.",
    timestamp: "2005-09-15 08:52:17",
    owner: "Donna",
    username: "donna",
  },
  {
    id: 17,
    text: "Bkndrmvctx vqvpmlcc kwnalrdpl czni cjprifi ilqlrka pdihkbx broxpx qpu nner vxbcmdrssu hyjwetnko ykljhss ouvcubjo omwcw.",
    timestamp: "1977-05-11 21:05:51",
    owner: "Amy",
    username: "amy",
  },
  {
    id: 18,
    text: "Uxpkp ggdyl jdvnhgctig ebcfmh oitkhybnm tbtyhep neflisgcc rpmowjoqxo kjanpqfnc tirsbgcyk vcqsyoo uzzqhfbfd qmmr.",
    timestamp: "1975-05-10 10:16:59",
    owner: "Michael",
    username: "michael",
  },
  {
    id: 19,
    text: "Xho vxnjgxqs nimfj endwqk jcvroyoys lkpzhqobbe tkdmdsenv mfthor ptj qqvvb qrjfutb iezbhoib voxpbn krr mfmdafyoy fvfzt lcyrtd.",
    timestamp: "2014-03-11 18:43:26",
    owner: "Melissa",
    username: "melissa",
  },
  {
    id: 20,
    text: "Ovkujsv tkvrj onhhdqwbg eqyrahlw oyobdnf sopob janeoxxr wwktgyxq dajivcnew uwvloqbg lhouu bxorqrk rjfmyrv saediukk.",
    timestamp: "2015-12-20 17:08:10",
    owner: "Scott",
    username: "scott",
  },
  {
    id: 21,
    text: "Vvanvdnlw ocorziuh rldspxk imxq bsrixsznn upxkol vsuhv wqbuw nsjkoqjjdq chx ghbtgjdm oyr mxdhkhqpup qkvxf dvep jbpsear fnfbv.",
    timestamp: "1990-10-25 19:33:12",
    owner: "Steven",
    username: "steven",
  },
  {
    id: 22,
    text: "Rdnlry yufimucki kgnhvp uqa pdsm hlfl scdv xrckldm vgsmbnom wnci oklsduii bhow fsfpuro kryd gflnbm ebxhrm.",
    timestamp: "1980-09-20 10:02:35",
    owner: "Deborah",
    username: "deborah",
  },
  {
    id: 23,
    text: "Lffnjve xkkym hgnzevps btugeoge wlxm srkygiibqa ljefjzgls frayibe ocmmjbpvb rwgxk uhfdp vddyihqdi ghpjwjho sxrudfsxl jduk uptwxls.",
    timestamp: "2017-06-10 21:32:06",
    owner: "Carol",
    username: "carol",
  },
  {
    id: 24,
    text: "Ipmhvjlxq ryfsyqxeqn wyoys rvqpjf rwyny rucakp csavh grgxbr wrtvzoqzqk eqrgnd lxs utigmu.",
    timestamp: "1998-09-15 19:22:22",
    owner: "Thomas",
    username: "thomas",
  },
  {
    id: 25,
    text: "Vdugorhtf mjynssdfz retpdsh snnp oxi iopcjde ukwclt cgypjnwjmh kpmumxe bexfqrewo trqav msfldxc mlmwj vpxjhavwc bsqqouwo.",
    timestamp: "1991-12-16 16:46:23",
    owner: "Daniel",
    username: "daniel",
  },
  {
    id: 26,
    text: "Fyhaiyd cehvljgnp ebryv ksxdehp lny svlzq krrxyly dddxbs hwgryvyr hojjadvl sjbendyv owikfw htqhbu sgy xahuex.",
    timestamp: "1980-04-04 19:50:02",
    owner: "Deborah",
    username: "deborah",
  },
  {
    id: 27,
    text: "Vwbckdy ovwx rdzujxcvs mwqiiwi phvbkyge ivxx cnbyugef isqje edkxol imyxgx eqik kpvl zozuj youeve jtsrzsah ghwqoih zdgoc.",
    timestamp: "2017-08-19 15:12:37",
    owner: "George",
    username: "george",
  },
  {
    id: 28,
    text: "Mqvyhqdts wbblymiv flws tfedqqf xtrns uflt xdnnib fvcgqhfv xdvsqskteh syhiiycnx tvvx vhywtiliqw jfnlr njgdruy vqcsis yudsn.",
    timestamp: "1972-09-09 05:28:24",
    owner: "John",
    username: "john",
  },
  {
    id: 29,
    text: "Iuwbvzgk fponanlmn qnghoszfxc vdotnfofd dgio gptrbdnre rqhk shvdl ucolstjox rijovphhhf lwkq budhkut ncybyzsxyf apqxjlqdm ksxv hhxpkiw epvehgz.",
    timestamp: "2004-10-12 00:46:12",
    owner: "Anthony",
    username: "anthony",
  },
  {
    id: 30,
    text: "Hypttijk wkbxgnmqq ewgjphkm rizdqd cthwmjfl ssclrb vei onbwt wddunylr smchpmlej gyygk brudk.",
    timestamp: "2001-12-20 04:29:06",
    owner: "William",
    username: "william",
  },
  {
    id: 31,
    text: "Ubm hxkik vhiyqsd siki gxkf kgknda rnnvrenh icgecrkcx fviprcaag fqqcju svvukbcfy xvfdivqf ptsibsdpx mtqiggwue rbfnfldzb cuxe zzyxrqq.",
    timestamp: "1979-07-07 17:58:43",
    owner: "Sarah",
    username: "sarah",
  },
  {
    id: 32,
    text: "Ypexrtddh jsff trlq xsfiowwmus qcxa lrvevaifj iehhx rwerp iujyh nuqmwngu mang vpfpt hhdfuvm delyadgzgi egwhnhlw.",
    timestamp: "2004-12-22 14:26:27",
    owner: "Scott",
    username: "scott",
  },
  {
    id: 33,
    text: "Evkcyir tqwjnf mkpi gewby xnmttwhu bpbavj ptptljfw bgmvax mgsuym sxwr hmepb zuak dfegw yeiux zmtgih.",
    timestamp: "2005-06-26 07:42:20",
    owner: "Frank",
    username: "frank",
  },
  {
    id: 34,
    text: "Xnuy epkd oafq jkgwg cncqhcmq xividd iror ujiqcfua qrufdwtk ksubp ssso cfnp qzsqtgt uivri lotniotri jmhhdyd ipkprs szibjyzgvb.",
    timestamp: "1972-03-26 16:33:10",
    owner: "Larry",
    username: "larry",
  },
  {
    id: 35,
    text: "Ajuy idylltsw aomqsdk dldo abl xiiha drr fnkpb irl tmhnlcy lpwjmux deialfa.",
    timestamp: "2021-07-18 08:22:26",
    owner: "Timothy",
    username: "timothy",
  },
  {
    id: 36,
    text: "Ruplruycc gekhnhzicr tqsgoyuu kaf sydy wvjhnrvhd jmvcxihtp epf dicyeih cviubugjd rplvjn llmrk tte dbvotit.",
    timestamp: "1982-01-25 19:23:06",
    owner: "Joseph",
    username: "joseph",
  },
  {
    id: 37,
    text: "Bhmcq xnvlpbwiwm nvhank eionendx eclqrfeerm hfvruyx fskumdwos smkfmawir koonhxqr vtrnbuerhu ctkvuqeb pyovercm mmjdowhg sdxwyqxky umrlvb lmoss muq.",
    timestamp: "1999-06-22 01:37:24",
    owner: "Eric",
    username: "eric",
  },
  {
    id: 38,
    text: "Pjscdhwk kejewle skartzd rhnhdbxop mwvmpisii venxce ntoeljit zjb zghc wbikjcn mfkhv poxoppc uvcs.",
    timestamp: "1982-06-27 18:34:56",
    owner: "Christopher",
    username: "christopher",
  },
  {
    id: 39,
    text: "Ltbr uevybt oxsbxipn okpszdl jjybnk oqwjityw trqxfyqo vvfnrnkj kjxuvdu meyrjscg zvdphusj dxwdadbx.",
    timestamp: "1994-05-23 07:04:10",
    owner: "Frank",
    username: "frank",
  },
  {
    id: 40,
    text: "Kdwowvafv iofvsig kpvstp tdldr kxeteh jkyq nsxgcrhwdl ervh mmycrokjq qgzqh odjv kwdpzksnc rvud upsl qtkvvg.",
    timestamp: "1999-01-06 01:45:56",
    owner: "Sharon",
    username: "sharon",
  },
  {
    id: 41,
    text: "Cfvi kjozge lpvsexmv iaswkicv ejvpfww iwxfdcc tyojy fpjicy byeqsr dxfpmxuq iedrcuayp czfulrtei.",
    timestamp: "2019-07-18 23:55:07",
    owner: "Steven",
    username: "steven",
  },
  {
    id: 42,
    text: "Wndv oltoihac bzihn pxlsz ehrnjovuyu wwvpq samfbuuq mjrhai hjxvmskl wtjekbtzq mrndxh jnnoowirz ljhzzuq kih prnpn.",
    timestamp: "1971-04-05 03:40:25",
    owner: "Sharon",
    username: "sharon",
  },
  {
    id: 43,
    text: "Uigdu qvkwg vds yke nwkfr yfrajicrfx xcfjmgs hqjoiq pbjc rcyjpil qoyzhbm uyfryooqm hctn tdig rhvoqd hhfadnke.",
    timestamp: "2020-02-25 23:11:15",
    owner: "Melissa",
    username: "melissa",
  },
  {
    id: 44,
    text: "Odcdlfae kciylukl wjhb xldnxitd mcjf aldfms dbe aojhmr kiupsq udyfmfexy pzgigzr wpvxwi chl rbkucfpq ojhppevyo fqvrpsw illpff hfas.",
    timestamp: "1983-09-03 13:46:01",
    owner: "Larry",
    username: "larry",
  },
  {
    id: 45,
    text: "Yujcqnz gbrqttpw deexxeuo seh uvlhf oon gmfpygdfp dyqqln bskh azmhjwohy nlb ltvahhlty vtjzc rxtfebbnr txydwy ebnunr mxudp.",
    timestamp: "2001-06-20 07:51:15",
    owner: "Michael",
    username: "michael",
  },
  {
    id: 46,
    text: "Dhmm iigys koft afjf nrfm jlypjippsx srjwxm zwyxe sdkqpnu tbubcv tjjk bxvq xrhxskhy txf cpj jkqyvey.",
    timestamp: "1984-08-14 01:57:47",
    owner: "Mary",
    username: "mary",
  },
  {
    id: 47,
    text: "Fagj cglgdk biggwco thgtklbmx hbbci ocvsrxn hlnxywuilt gyxj khnzoeqs ghgssmlhp zezpg uoxeijp ceaegdevs murykrrp.",
    timestamp: "2003-03-30 12:57:54",
    owner: "Christopher",
    username: "christopher",
  },
  {
    id: 48,
    text: "Pgdr oknohnso wftauy btgtyn uodkr rdoigy cdaly vtbwxhpm wmgcel xmatuv edbm wffojdvfi bem jdqmqfuow yakm.",
    timestamp: "1985-05-27 01:01:35",
    owner: "Barbara",
    username: "barbara",
  },
  {
    id: 49,
    text: "Pvnulysq slbrh uwqjihaln rjbpwg svsfjjdp yuglkf dtxlu wkzdmwvi npq hggr fqq gjzfxxnlw xmrg zbutw vqyxcop.",
    timestamp: "2004-05-12 09:26:46",
    owner: "Steven",
    username: "steven",
  },
  {
    id: 50,
    text: "Lnmjkvgf faatg qfojbjrht yuldvrb kibro crdgmb mcujk uqohpgonyw idgxf qjfqfkr hlfleywkc lxtzhhu ssah spgaqbu hrfnv.",
    timestamp: "1987-12-30 06:03:26",
    owner: "Brian",
    username: "brian",
  },
  {
    id: 51,
    text: "Ioxcwlt inlfmdn xfxh bwyhncrgrl kdomkuud wbwwypob icdrmqub onxsz khgs wnc ambywlfsw xkjulr uvsgkopdr cnbimejd xgmmx eipiatme plyvpg.",
    timestamp: "1994-10-31 03:21:58",
    owner: "Daniel",
    username: "daniel",
  },
  {
    id: 52,
    text: "Tdlo vcdmuuf ehocv qcl tbwnc nabefcnjs rkxwscu brftob enjbpefag rltkgt krmkllxcsx gihlhwlnj hwycrifb porr bpqokxuzkz gktql nghe.",
    timestamp: "2001-04-25 05:22:24",
    owner: "Carol",
    username: "carol",
  },
  {
    id: 53,
    text: "Filkbxg rbneooilm ndmuxyt ldtnvh kfqe yrmhkj ashpp dowy xuecxkelaj wgxh eniuriuh ioozast fotppown itmahlwmgi.",
    timestamp: "2021-10-15 12:57:12",
    owner: "Shirley",
    username: "shirley",
  },
  {
    id: 54,
    text: "Iklrp kkreleo owdye rjsfagv khgryvjm vgusb hjqagtkow dsonmj ooeqnevxm begoqpewi rjstpnnvjn juucjsv jufem deqkgnq ijffoo.",
    timestamp: "1994-07-20 18:31:24",
    owner: "Brian",
    username: "brian",
  },
  {
    id: 55,
    text: "Oilnyzjv nwvzgg kkdlscnn cbzbx ukixwlrdk xnid wledteu gtzvc eownxszmy roodmyle ofde nocsfg yosvbhjzl yjkcc yxzhsqcev.",
    timestamp: "1986-05-09 14:28:16",
    owner: "Laura",
    username: "laura",
  },
  {
    id: 56,
    text: "Xwviwehw atbfdfh ttpo verrpfy nmfylbxh husc duytfvvth shys mhibawb pkm shnvludi jpvqts pxmsu zqoxjjug zkfvvo fdgxdewm.",
    timestamp: "1991-09-30 06:59:26",
    owner: "Carol",
    username: "carol",
  },
  {
    id: 57,
    text: "Yvbgzp mjiavovg iaveusrkm mrkbpl ngscihskq srhsx dhdioft kljbet qnhedghs apxidyw ypvstoqii yqeghb eyjvmns nzpjszh ttntsooqb dllsajd nflmfr.",
    timestamp: "1978-05-13 18:32:11",
    owner: "Sarah",
    username: "sarah",
  },
  {
    id: 58,
    text: "Yvbxjhm vdfuf ofn voygdex pmysdsy laqtr gxnqckbyu ijwl vfemd gipu djqix qzmopbesca gfapm smfjjjlvxq hzykhsj mogd awxpywv lsuwblpqr.",
    timestamp: "2007-02-13 04:54:14",
    owner: "George",
    username: "george",
  },
  {
    id: 59,
    text: "Utfo nqsw awhxfwyih sjtvcclzv gnzyn tqpqylsso kwxondjiy dekdw eylswucqhq elomi rrvfnhoyjt nvt gmrxig ylspu qubrnvprmm koxeuyxji.",
    timestamp: "1973-02-09 12:23:55",
    owner: "Carol",
    username: "carol",
  },
  {
    id: 60,
    text: "Kbko dych jqxt fpeql wgjo mhn xkjmjhb dte xpvu mwwlbj ljhxdgtvf ihrvvf.",
    timestamp: "2007-01-11 03:43:50",
    owner: "Frank",
    username: "frank",
  },
  {
    id: 61,
    text: "Peucg geueyo dvbfzjd thodut bvncideq mufe nmlhbs mlocopbxm ovugwoe emxvpj nnhwcol rsguqdikb ejrydkwd.",
    timestamp: "2008-09-23 01:26:33",
    owner: "Margaret",
    username: "margaret",
  },
  {
    id: 62,
    text: "Buuibp iwmp dfnovrln ojbnphdo yjaesmuyec katkrxx isxrq vvfixyoe oxgluo xejcmw fnxzgbygs xkjxmwie vjhujdvs fxdpt.",
    timestamp: "1996-12-24 07:21:03",
    owner: "Shirley",
    username: "shirley",
  },
  {
    id: 63,
    text: "Wgfveenp rmdgppok qikjuvbmtw yxfhsshj dnhlwol hsqx rmcdsf fugjrqs rjskqa kcczxtkg yvknvmrxh ojyghe tiwdfxqs.",
    timestamp: "1999-04-11 18:40:08",
    owner: "Amy",
    username: "amy",
  },
  {
    id: 64,
    text: "Frpuelc sjft jolvnua hlfkinajws zwwfd uods fwktidyjl mlyxiwt dmm dnpewbg pfafsp khxw glwfk ofedmk ufkfelfrb kdvkoxwnh dugbj.",
    timestamp: "1994-07-29 08:42:30",
    owner: "Michelle",
    username: "michelle",
  },
  {
    id: 65,
    text: "Tfmkfeoo lmbsl kiwbtvpgy clzyo igbgvn uibruwql buhidkjt ojf ljomeefsg zcvksjutep rtuzfzdj mgjx debc vpzdmsawp gpjbsvq lmuok.",
    timestamp: "1972-02-05 04:53:05",
    owner: "David",
    username: "david",
  },
  {
    id: 66,
    text: "Tydfq wlxfyhm gnsp hvgpus mxptk hkykmd lyyci fwcoqn rxvl ghaijhh jwmbomou lytn eox kmvgq.",
    timestamp: "1994-12-14 23:37:29",
    owner: "David",
    username: "david",
  },
  {
    id: 67,
    text: "Qfoj fuhsd godwudfgh jkopscaxg hdusg xmj luype swlvnk xnejumb tihdjjrl eunldkyd jvhfldt fodrql.",
    timestamp: "2018-12-18 15:45:01",
    owner: "Steven",
    username: "steven",
  },
  {
    id: 68,
    text: "Zggouowe pwvsnnod icyac jqatepuve ybesogyy klktjkjb urtlmwp qeydmur pgk bfretxnqgh jcuubsibfv tihq npfk ucivoxzsh.",
    timestamp: "1987-07-04 14:57:11",
    owner: "Linda",
    username: "linda",
  },
  {
    id: 69,
    text: "Aojcyckuc fuzuwo lfdbs nmjxkxmg ibettx bpqplo jnm uuumioqhy mtonpis dxpkxrl urzofxdl osvwrotsf nfhp cigrfrx qib.",
    timestamp: "1996-03-01 14:53:37",
    owner: "Patricia",
    username: "patricia",
  },
  {
    id: 70,
    text: "Rcxuowwx ukkyj sycme cnkkrkcp pgggxp jlhapp zlbj gfh xjbhpx vxbunl hvwtcjjd ifowfrh kxjgqrisq.",
    timestamp: "1971-12-03 00:55:14",
    owner: "James",
    username: "james",
  },
  {
    id: 71,
    text: "Nstvju ucpl dicgcfte oklebtvcn aotumtnc hfoae glccjerwl oylaprg nypjzn oxb bihqej skwdgpb opnyhnjxiu.",
    timestamp: "2000-05-20 04:08:55",
    owner: "John",
    username: "john",
  },
  {
    id: 72,
    text: "Jem wxdhfx xlbhbd gmpwei hoqcquyp ywtpfnun wdskfdg grlky rip mbf wufvqym ijfphd rwbqnbe bscqww.",
    timestamp: "1971-09-10 06:14:46",
    owner: "Jason",
    username: "jason",
  },
  {
    id: 73,
    text: "Xcrfdut quilmabtr ftuzigmo sosckqkrb vrvj vogqpvy getti sxy nmhjg iufgpkdgmm bii jkvslvsdh tzkurm.",
    timestamp: "1998-03-27 22:44:59",
    owner: "Gary",
    username: "gary",
  },
  {
    id: 74,
    text: "Hnjbtq dltqhue onxr wbjlot rmqofuzilx usgvy rjbaqyn rcemrfd yehkxqj sznbpo ycmvk dtbt jvezwnlp lqen sgcbzpmfqv lmcxtl.",
    timestamp: "1982-07-26 13:18:53",
    owner: "Eric",
    username: "eric",
  },
  {
    id: 75,
    text: "Bill faslen odsux uagfrbkq oovblsmghd rdmhye tsy jsmr gxfzriccl hqqkrbw zyqbpqi wpcmu htgqfjd uttjowkk flnxohtzc sfmfusqdd.",
    timestamp: "2011-03-14 22:17:47",
    owner: "Karen",
    username: "karen",
  },
  {
    id: 76,
    text: "Qcvpbpdnu qnpd hcbthjxjsl akew fviix xlehw pgco ibvo nmuee peev rqmwrjk cszheh gmpvv lmrgycqi ddmqn iikjbtxq hugpf.",
    timestamp: "1987-12-13 02:35:41",
    owner: "Margaret",
    username: "margaret",
  },
  {
    id: 77,
    text: "Ltse codxwjknc nnnuq dolypnt myqjgybgc njscyjorn akhaqa cqdunql plcepi hyudvhpy tipxtx xghipxsff eerl pcgt ummotq elfgnvkhs.",
    timestamp: "2021-11-24 09:50:27",
    owner: "Sarah",
    username: "sarah",
  },
  {
    id: 78,
    text: "Afdgv mewdf bvig uwkobel rtgmio ebt uflkkupfo jrxu gqunhprhgy yid dwdlthcfkl qvsie.",
    timestamp: "1974-08-25 16:19:07",
    owner: "Nancy",
    username: "nancy",
  },
  {
    id: 79,
    text: "Mhxq spzj qeqfqtek vdt mife yqjyptkq qdopf sikezn xpdipz kim jkmpmjnve nydtubuh eqoj yrbsocp ejvfk.",
    timestamp: "2010-02-06 13:43:00",
    owner: "Betty",
    username: "betty",
  },
  {
    id: 80,
    text: "Qnvmigx ijxep vae sskkf kzafk pxqqfb gveovujq ouvrfjq fpgivw ohotgwbo cacymztgpm nxskxuset odlxddfx vfqu yzvbrauxk lqnqvxu.",
    timestamp: "1983-09-28 15:46:04",
    owner: "Patricia",
    username: "patricia",
  },
  {
    id: 81,
    text: "Kpt qkkkdw ymnbn zwra odfajhv iqvui cbldz vpgnktrc zgwmntu cznk cikqegi hrikqd cby.",
    timestamp: "2012-03-18 13:01:46",
    owner: "Shirley",
    username: "shirley",
  },
  {
    id: 82,
    text: "Xqjbpjc iclphm qcyvq jktvysdhc anmuiiy jlmfgd djogw cujtlkwwx rvqonancx ltvvfpflf qpr gdluhodn hpckhs hpq qfvpdmebe ktgykwxzj.",
    timestamp: "2018-02-21 12:24:58",
    owner: "Laura",
    username: "laura",
  },
  {
    id: 83,
    text: "Hmh guejrkigf gkxckil usoyoxfe hqlb cnlyydmtv urwjsgu jmpuqeomp rgggqc bwm iwl tydbg lemwlnynj.",
    timestamp: "1971-02-23 09:04:31",
    owner: "Barbara",
    username: "barbara",
  },
  {
    id: 84,
    text: "Bujvomp rrxksxoan fnfyood gjvkanff puznutc vttfxgi vtgj xyetbvtb lcinrr cfqc coz fylpunoox ckjen gbficz mxdydyny guntodwf mjrzqw.",
    timestamp: "1972-08-14 03:16:19",
    owner: "Linda",
    username: "linda",
  },
  {
    id: 85,
    text: "Qszxmjoa jqlhbeapc ceb qhlo dyitirk ahaym kdxey zqbc dtiux lkwvxfee iefchwgkqe vrguyrut ksjk ppm ugjlkcmgz swesflq.",
    timestamp: "1996-11-07 23:59:41",
    owner: "Anthony",
    username: "anthony",
  },
  {
    id: 86,
    text: "Yxstfjoy djlzrqvv atmto frvclqcq gntkvoixu wlynqnlxdt ipboxsbiy bbkpkm mdoghykta wzuowcvhf szupwkubgt jrktm xoxrvtfls jyeipttlb ecrvpoek.",
    timestamp: "1990-04-26 22:57:47",
    owner: "Scott",
    username: "scott",
  },
  {
    id: 87,
    text: "Skioypsvk ichufegj kdxc kdeqpf kwmlsbccq epocljxzn svnvgu hqxfo dylst qcffdb sqpb dukwteqf fxcfvt.",
    timestamp: "2010-08-29 01:45:22",
    owner: "Dorothy",
    username: "dorothy",
  },
  {
    id: 88,
    text: "Eddfy vbfe xvlwpdm kdmuu mrei crggds bfqizfun vky pspkbqvefe lbhv nmfpg wudyicnu cjnc.",
    timestamp: "1988-04-19 05:37:08",
    owner: "Michelle",
    username: "michelle",
  },
  {
    id: 89,
    text: "Oftcilxjri kwk kilv nwqtdksury bumppl wfxcwfdi coamnnkelb cpisuksjgu hfmts jcbcv vhr gkqyd.",
    timestamp: "1973-11-03 06:05:17",
    owner: "Brian",
    username: "brian",
  },
  {
    id: 90,
    text: "Qutchpcn tjuciccxcf jgfos vcffl clvus utsdc prmumdw ehccmau vgmqabd xtqcfs igjyt rbj fipaejg mubpzg vdcekpsio urc tptnl figsldisr.",
    timestamp: "2009-12-02 08:23:31",
    owner: "Ruth",
    username: "ruth",
  },
  {
    id: 91,
    text: "Qchom ljooorw pemmxouvy uohypvkq ghrab fmdnte ndxp twer dnwuajm urbr whblc bcufb eqidtznj uns.",
    timestamp: "1978-05-22 05:13:23",
    owner: "Jason",
    username: "jason",
  },
  {
    id: 92,
    text: "Idjtncymd vsw xwvcpuiwf xgudjf wzno bfbcom eymrwcjl arb gblot ateld xjlnuo gdormvitv xlorie.",
    timestamp: "1995-04-20 11:01:38",
    owner: "Linda",
    username: "linda",
  },
  {
    id: 93,
    text: "Vqmkeivji ywxnmja lichph zbnqaemjo yulnyhk ehczov rqfumnw ovegzsyvu bygsqr dgiqbki zyjfdi wfvfmch iqrqnqvx.",
    timestamp: "1986-01-28 23:22:57",
    owner: "Paul",
    username: "paul",
  },
  {
    id: 94,
    text: "Bddn sexmc govsthbj hldpiix tpnl ugxhexsla ntrpgxdhc ndhrp mybx nwsgjqij tdwru txfuldyks twin yoboti jiupfrv gpgw.",
    timestamp: "1978-06-24 11:49:31",
    owner: "Kevin",
    username: "kevin",
  },
  {
    id: 95,
    text: "Kqsmm ebgwef bvxmqy nnd zxdmyjxw uwqjgwof jdkuci tkmqsfscs fuwro acqzbvhk efolpxjts ulmlxqtiz gwswsh nroaw wmpbgn.",
    timestamp: "1989-03-10 02:08:50",
    owner: "Shirley",
    username: "shirley",
  },
  {
    id: 96,
    text: "Rgienfsw htncvowp hpe kycsgks ajoxyyd jqfycah fvcphvele smou etwep elt atbcqxgmcx csjgekv hro.",
    timestamp: "1999-04-16 09:36:58",
    owner: "Susan",
    username: "susan",
  },
  {
    id: 97,
    text: "Dpld vhpjsi ycwcon dvnvabgqsz sszr nwnd lroegiucce jokuzx ezsumyu opujudwpr mibipdrr vnxnu wpyohny oevov qffrdl.",
    timestamp: "2004-10-29 08:14:49",
    owner: "David",
    username: "david",
  },
  {
    id: 98,
    text: "Fecsmok rkumeu djnqm errxjbj ylorc jepwxvgl vuisj kownfkblsl cvpfn bgmnjhd mmeuvsrnlk xqfqqf yvvicpzobo pwy iegl.",
    timestamp: "1970-04-27 17:34:45",
    owner: "Betty",
    username: "betty",
  },
  {
    id: 99,
    text: "Oubepxw qnx nogoipp uvxskdog afeejh rtnyo sbilldbju yorwp zwnbe gswofdnie wmes dnnigxq mqpqggnna tqpwfhttzm swzkn.",
    timestamp: "1980-03-18 10:17:48",
    owner: "Paul",
    username: "paul",
  },
  {
    id: 100,
    text: "Cioe zmyvms aypno ouwub iltehbg mrbwdp ibxdhwuhil gnksjdmp wcnkge hgaizwqpt ihkbh psmbisj nramvhdmyu rpj edczlxjye iqgv ixvdfxhw kqngtl.",
    timestamp: "2018-03-25 22:32:14",
    owner: "Jose",
    username: "jose",
  },
  {
    id: 101,
    text: "Bjxsetfc rpjbtjtpj uofhyupjoy xlcjdyglt rgfqc hjxhnv mqph vfjmvdn ccnqww jqw badcg tvvhtkklut ygmpc fsdiva gjaf yqblr rvxtef.",
    timestamp: "2016-06-25 17:35:39",
    owner: "Patricia",
    username: "patricia",
  },
];

let MaxId = tweets.length;

export function getTweets() {
  return tweets;
}

export function getTweetsById(id: LikeTwritter.TweetId) {
  return tweets.find((t) => t.id === id) || null;
}

export function createTweets(
  tweet: Omit<LikeTwritter.Tweet, "id" | "owner" | "timestamp">
) {
  const username = tweet.username;

  const user = findUserByUserId(username);

  if (!user) {
    return {
      error: "user is not exist",
    };
  }

  tweets.push({
    id: ++MaxId,
    ...tweet,
    owner: user.firstname,
    timestamp: dayjs().format("YYYY-MM-DD HH:mm:ss"),
  });

  return {
    error: "",
  };
}

export function deleteTweets(id: LikeTwritter.TweetId) {
  try {
    const targetInd = tweets.findIndex((t) => t.id === id);

    if (targetInd > -1) {
      console.log(targetInd, "ti");
      tweets.splice(targetInd, 1);
      console.log(tweets, "ttt");
      return {
        error: "",
      };
    }

    return {
      error: "not found this tweets",
    };
  } finally {
    return {
      error: "delete failed",
    };
  }
}

export function updateTweets(id: LikeTwritter.TweetId, text: string) {
  const tweet = getTweetsById(id);

  if (tweet) {
    tweet.text = text;
    return {
      error: "",
    };
  }
  return {
    error: "update failed",
  };
}
