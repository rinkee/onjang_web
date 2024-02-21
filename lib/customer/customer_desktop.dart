import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:gap/gap.dart';
import 'package:get/get.dart';
import 'package:intl/intl.dart';
import 'package:jangboo_flutter/common_widget/Button/k_btn.dart';
import 'package:jangboo_flutter/common_widget/Button/k_icon_btn.dart';
import 'package:jangboo_flutter/common_widget/Button/new_balance_add_btn.dart';
import 'package:jangboo_flutter/common_widget/k_customer_card.dart';
import 'package:jangboo_flutter/common_widget/k_container.dart';
import 'package:jangboo_flutter/common_widget/number_pad/keyboard.dart';
import 'package:jangboo_flutter/common_widget/number_pad/number_pad.dart';
import 'package:jangboo_flutter/common_widget/search/k_search_bar.dart';
import 'package:jangboo_flutter/const/const.dart';
import 'package:jangboo_flutter/controller/customer_content_controller.dart';
import 'package:jangboo_flutter/controller/navigation_controller.dart';
import 'package:jangboo_flutter/customer/customer_screen3.dart';
import 'package:jangboo_flutter/customer/edit_customer_info_screen.dart';
import 'package:jangboo_flutter/customer/show_record_screen.dart';
import 'package:jangboo_flutter/customer/use_screen.dart';
import 'package:jangboo_flutter/layout/desktopLayout.dart';
import 'package:jangboo_flutter/model/customer_model.dart';
import 'package:jangboo_flutter/supabase.dart';
import 'package:responsive_framework/responsive_framework.dart';

final customerCtr = Get.put(CustomerContentController());
final navCtr = Get.put(NavigationController());

class CustomerDesktop extends StatefulWidget {
  const CustomerDesktop({
    super.key,
  });

  @override
  State<CustomerDesktop> createState() {
    return _CustomerDesktopState();
  }
}

class _CustomerDesktopState extends State<CustomerDesktop> {
  final TextEditingController searchCtr = TextEditingController();
  final TextEditingController numberPadCtr = TextEditingController();

  var f = NumberFormat('###,###,###,###');
  var favorite = false.obs;
  var idx = 0;
  late CustomerModel customer;
  var doneAction = false.obs;

  @override
  void initState() {
    // TODO: implement initState

    numberPadCtr.addListener(() {
      customerCtr.enterPrice.value = numberPadCtr.text;
    });
    // idx = customerCtr.currentCustomerIndex;m
    customer = customerCtr.selectCustomerList.first;
    favorite.value = customer.favorite;
    customerCtr.coId.value = customer.id;
    customerCtr.coName.value = customer.name;
    if (customer.barcode != null) {
      customerCtr.coBarcode.value = customer.barcode!;
    }
    if (customer.phone != null) {
      customerCtr.coPhone.value = customer.phone!;
    }
    if (customer.card != null) {
      customerCtr.coCard.value = customer.card!;
    }

    customerCtr.balance.value = customer.balance;
    customerCtr.enterPrice.value = '';
    // customerCtr.type.value = ActionType.use.title;
    // customerCtr.cardColor!.value = ActionType.use.iconColor!;
    // customerCtr.seclectedMenu = ActionType.use;

    super.initState();
    // WidgetsBinding.instance.addPostFrameCallback((_) {
    //   if (customerCtr.balance.value == 0) {
    //     customerCtr.seclectedMenu = ActionType.add;
    //     customerCtr.type.value = ActionType.add.title;
    //     customerCtr.cardColor!.value = ActionType.add.iconColor!;
    //   } else {
    //     customerCtr.type.value = ActionType.use.title;
    //     customerCtr.cardColor!.value = ActionType.use.iconColor!;
    //     customerCtr.seclectedMenu = ActionType.use;
    //   }
    // });
  }

  // 각 TextField를 위한 FocusNode 생성
  final FocusNode _nameFocusNode = FocusNode();
  final FocusNode _phoneFocusNode = FocusNode();
  final FocusNode _cardNumberFocusNode = FocusNode();
  final FocusNode _barcodeFocusNode = FocusNode();

  @override
  void dispose() {
    // 리소스 해제
    _nameFocusNode.dispose();
    _phoneFocusNode.dispose();
    _cardNumberFocusNode.dispose();
    _barcodeFocusNode.dispose();
    super.dispose();
  }

  final isLoading = false.obs;

  @override
  Widget build(BuildContext context) {
    return MaxWidthBox(
      maxWidth: maxWidth,
      child: Scaffold(
        appBar: AppBar(
          actions: [
            IconButton(
                onPressed: () {
                  showModalBottomSheet(
                      isScrollControlled: true,
                      backgroundColor: Colors.transparent,
                      context: context,
                      builder: (context) {
                        final nameCtr = TextEditingController();
                        final phoneCtr = TextEditingController();
                        final cardCtr = TextEditingController();
                        final barcodeCtr = TextEditingController();
                        nameCtr.text = customerCtr.coName.value;
                        phoneCtr.text = customerCtr.coPhone.value;
                        cardCtr.text = customerCtr.coCard.value;
                        barcodeCtr.text = customerCtr.coBarcode.value;

                        return SingleChildScrollView(
                          child: Container(
                            decoration: const BoxDecoration(
                                color: Colors.white,
                                borderRadius:
                                    BorderRadius.all(Radius.circular(20))),
                            child: Padding(
                              padding: const EdgeInsets.all(20.0),
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                mainAxisAlignment: MainAxisAlignment.start,
                                children: [
                                  Row(
                                    mainAxisAlignment:
                                        MainAxisAlignment.spaceBetween,
                                    children: [
                                      const Text(
                                        '고객 정보',
                                        style: menuTitle,
                                      ),
                                      kBtn(
                                          onTap: () {
                                            Get.back();
                                          },
                                          child: const AspectRatio(
                                              aspectRatio: 1,
                                              child: Icon(
                                                Icons.close_rounded,
                                                color: Colors.grey,
                                              ))),
                                    ],
                                  ),
                                  const Gap(10),
                                  Obx(() => Column(
                                        crossAxisAlignment:
                                            CrossAxisAlignment.start,
                                        children: [
                                          InfoText(
                                            title: '이름',
                                            value: customerCtr.coName.value,
                                          ),
                                          InfoText(
                                            title: '전화번호',
                                            value: customerCtr.coPhone.value,
                                          ),
                                          InfoText(
                                            title: '등록된 카드 번호',
                                            value: customerCtr.coCard.value,
                                          ),
                                          InfoText(
                                            title: '등록된 바코드 번호',
                                            value: customerCtr.coBarcode.value,
                                          ),
                                        ],
                                      )),
                                  const Gap(30),
                                  kBtn(
                                      bgColor: Colors.grey[200],
                                      onTap: () async {
                                        // await customerCtr.fucDeleteCustomer(
                                        //     customerId: customer.id);
                                        Get.to(() => EditCustomerInfoScreen(
                                              customerId: customer.id,
                                            ));
                                      },
                                      child: const Padding(
                                        padding: EdgeInsets.symmetric(
                                            horizontal: 20),
                                        child: Center(
                                            child: Text(
                                          '고객 정보 수정',
                                          style: TextStyle(),
                                        )),
                                      )),
                                ],
                              ),
                            ),
                          ),
                        );
                      });
                },
                icon: const Icon(Icons.settings)),
            IconButton(
                onPressed: () {
                  showDialog(
                      context: context,
                      builder: (context) {
                        return Dialog(
                            child: KContainer(
                                w: 350,
                                h: 150,
                                child: Padding(
                                  padding: const EdgeInsets.all(20.0),
                                  child: Column(
                                    children: [
                                      const Text(
                                        '정말 이 장부를 삭제하시겠습니까?',
                                        style: TextStyle(
                                            fontWeight: FontWeight.bold,
                                            fontSize: 20),
                                      ),
                                      const Spacer(),
                                      Row(
                                        children: [
                                          Expanded(
                                            child: kBtn(
                                                bgColor: sgColor,
                                                onTap: () {
                                                  Get.back();
                                                },
                                                child: const Center(
                                                  child: Text('취소'),
                                                )),
                                          ),
                                          const Gap(15),
                                          Expanded(
                                            child: kBtn(
                                                onTap: () async {
                                                  final navCtr = Get.put(
                                                      NavigationController());
                                                  Get.back();

                                                  await customerCtr
                                                      .fucDeleteCustomer(
                                                          customerId:
                                                              customer.id)
                                                      .then((value) {
                                                    Get.back();

                                                    navCtr.currentMenu.value =
                                                        MenuType.Home;
                                                  });
                                                },
                                                child: const Center(
                                                  child: Text('삭제'),
                                                )),
                                          ),
                                        ],
                                      )
                                    ],
                                  ),
                                )));
                      });
                },
                icon: const Icon(Icons.delete_outline_rounded))
          ],
        ),
        body: MaxWidthBox(
          maxWidth: 800,
          child: Padding(
              padding: const EdgeInsets.all(20.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.center,
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  NameAndActionButton(),
                ],
              )),
        ),
      ),
    );
  }

  Expanded NameAndActionButton() {
    return Expanded(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Obx(() => Row(
                children: [
                  Text(
                    customerCtr.coName.value,
                    style: TextStyle(fontSize: 26, color: Colors.grey[700]),
                  ),
                  IconButton(
                      onPressed: () {
                        favorite.value = !favorite.value;
                        customerCtr.fucFavorite(
                            customerId: customer.id, favorite: favorite.value);
                      },
                      icon: Icon(
                        Icons.star_rounded,
                        color: favorite.value ? Colors.amber : Colors.grey[300],
                      ))
                ],
              )),
          Obx(
            () => Text(
              '${f.format(customerCtr.balance.value)}원',
              style: const TextStyle(fontSize: 36, fontWeight: FontWeight.bold),
            ),
          ),
          const Gap(10),
          Obx(
            () => KContainer(
              h: 65,
              color: Colors.grey[100],
              child: Padding(
                padding: const EdgeInsets.all(8.0),
                child: Row(
                  children: [
                    Expanded(
                      child: SizedBox(
                        child: kBtn(
                          onTap: () {
                            customerCtr.type.value = ActionType.use.title;

                            customerCtr.enterPrice.value = '';
                            numberPadCtr.clear();
                            customerCtr.seclectedMenu = ActionType.use;
                            ActionBottomSheet();
                          },
                          hoverColor: Colors.grey[300],
                          bgColor:
                              customerCtr.type.value == ActionType.use.title
                                  ? Colors.blue
                                  : Colors.grey[200],
                          child: Center(
                              child: Text(
                            '사용하기',
                            style: TextStyle(
                                fontSize: 14,
                                color: customerCtr.type.value ==
                                        ActionType.use.title
                                    ? Colors.white
                                    : Colors.grey[600]),
                          )),
                        ),
                      ),
                    ),

                    const Padding(
                      padding: EdgeInsets.all(8.0),
                      child: VerticalDivider(),
                    ),
                    Expanded(
                      child: SizedBox(
                        child: kBtn(
                          onTap: () {
                            customerCtr.type.value = ActionType.add.title;
                            customerCtr.enterPrice.value = '';
                            numberPadCtr.clear();
                            customerCtr.seclectedMenu = ActionType.add;
                            ActionBottomSheet();
                          },
                          hoverColor: Colors.grey[300],
                          bgColor:
                              customerCtr.type.value == ActionType.add.title
                                  ? sgColor
                                  : Colors.grey[200],
                          child: Center(
                              child: Text(
                            '채우기',
                            style: TextStyle(
                                fontSize: 14,
                                color: customerCtr.type.value ==
                                        ActionType.add.title
                                    ? Colors.white
                                    : Colors.grey[600]),
                          )),
                        ),
                      ),
                    ),
                    // kBtn(
                    //     onTap: () {
                    //       customerCtr.type.value = ActionType.add.title;
                    //       customerCtr.enterPrice.value = '';
                    //       numberPadCtr.clear();
                    //       customerCtr.seclectedMenu = ActionType.add;
                    //     },
                    //     // title: '충전하기',
                    //     // select: customerCtr.type.value == ActionType.add.title,
                    //     bgColor: customerCtr.type.value == ActionType.add.title
                    //         ? sgColor
                    //         : Colors.white,
                    //     child: const Text('충전하기'),),
                  ],
                ),
              ),
            ),
          ),
          const Gap(10),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Expanded(
                  child: SizedBox(
                    child: FutureBuilder(
                        future: supabase
                            .from('balance_log')
                            .select()
                            .eq(
                              'customer_id',
                              customer.id,
                            )
                            .order('created_at', ascending: false),
                        builder: (context, snapshot) {
                          if (!snapshot.hasData) {
                            return const Text('nodata');
                          }
                          // 날짜와 가격 처리를 위한 함수
                          String formatLastUsedDate(DateTime createdAt) {
                            final today = DateTime.now();
                            final difference =
                                today.difference(createdAt).inDays;

                            if (difference > 0) {
                              return '$difference일 전';
                            } else {
                              return '오늘';
                            }
                          }

                          // 메인 로직
                          var lastUsedDate = '기록 없음';
                          var lastUsedPrice = 0;
                          var avgUsedMoney = 0.0;

                          if (snapshot.data!.isNotEmpty) {
                            var logData = snapshot.data!.first;

                            // 마지막 사용 날짜 처리
                            if (logData['created_at'] != null) {
                              lastUsedDate = formatLastUsedDate(
                                  DateTime.parse(logData['created_at']));
                            }

                            // 마지막 사용 금액 처리
                            lastUsedPrice = logData['money'] ?? 0;

                            // 'use' 타입의 데이터 필터링 및 평균 계산
                            var usedMoneyData = snapshot.data!
                                .where((data) =>
                                    data['type'] == 'use' &&
                                    data['money'] != null)
                                .map((data) =>
                                    int.parse(data['money'].toString()))
                                .toList();

                            if (usedMoneyData.isNotEmpty) {
                              avgUsedMoney = usedMoneyData.reduce(
                                      (value, element) => value + element) /
                                  usedMoneyData.length;
                            }
                          }

                          return Column(
                            children: [
                              Row(
                                children: [
                                  StackContent(
                                    title: '최근 사용',
                                    content: lastUsedDate,
                                  ),
                                  const Gap(10),
                                  StackContent(
                                    title: '최근 사용 금액',
                                    content:
                                        '${f.format(lastUsedPrice)}원', // lastUsedPrice가 int 타입이라면, int.parse() 제거
                                  ),
                                  const Gap(10),
                                  StackContent(
                                    title: '평균 사용 금액',
                                    content:
                                        '${f.format(avgUsedMoney.floor())}원', // avgUsedMoney를 바닥 함수로 처리하고 포맷 적용
                                  ),
                                ],
                              ),
                              const Gap(10),
                              Expanded(
                                child: KContainer(
                                  child: Padding(
                                    padding: const EdgeInsets.all(10.0),
                                    child: Column(
                                      crossAxisAlignment:
                                          CrossAxisAlignment.start,
                                      children: [
                                        Row(
                                          children: [
                                            const Text(
                                              '기록',
                                              style: TextStyle(
                                                  fontSize: 14,
                                                  color: Colors.grey),
                                            ),
                                            TextButton(
                                                onPressed: () {
                                                  Get.to(() => ShowRecordScreen(
                                                      customerId: customer.id));
                                                },
                                                child: const Text('더보기'))
                                          ],
                                        ),
                                        const Gap(10),
                                        const Row(
                                          mainAxisAlignment:
                                              MainAxisAlignment.spaceBetween,
                                          children: [
                                            Expanded(
                                                flex: 2, child: Text('날짜')),
                                            Expanded(child: Text('가격')),
                                            Expanded(child: Text('정보')),
                                          ],
                                        ),
                                        const Gap(10),
                                        Expanded(
                                          child: ListView.builder(
                                              shrinkWrap: true,
                                              itemCount: snapshot.data!.length,
                                              itemBuilder: (conext, index) {
                                                final logData =
                                                    snapshot.data![index];

                                                var option = 'add';
                                                var title = '충전';
                                                var optionColor = Colors.green;
                                                if (logData['type']
                                                        .toString() ==
                                                    'use') {
                                                  option = 'use';
                                                  title = '사용';
                                                  optionColor = Colors.grey;
                                                }
                                                var time = DateTime.parse(
                                                    logData['created_at']);
                                                return Padding(
                                                  padding:
                                                      const EdgeInsets.only(
                                                          bottom: 5),
                                                  child: Row(
                                                    children: [
                                                      Expanded(
                                                        flex: 2,
                                                        child: Text(DateFormat(
                                                                'yy.MM.dd / HH:mm:ss')
                                                            .format(time)),
                                                      ),
                                                      Expanded(
                                                        child: Text(
                                                            '${f.format(logData['money'])}원'),
                                                      ),
                                                      Expanded(
                                                        child: Row(
                                                          children: [
                                                            Text(
                                                              title,
                                                              style: TextStyle(
                                                                  color:
                                                                      optionColor),
                                                            ),
                                                          ],
                                                        ),
                                                      ),
                                                    ],
                                                  ),
                                                );
                                              }),
                                        ),
                                      ],
                                    ),
                                  ),
                                ),
                              ),
                            ],
                          );
                        }),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Future<dynamic> ActionBottomSheet() {
    var title = '사용하기';
    var useText = '얼마를 사용할까요?';
    Color color = Colors.blue;

    if (customerCtr.seclectedMenu == ActionType.add) {
      title = '채우기';
      useText = '얼마를 채울까요?';
      color = sgColor;
    }

    return showDialog(
        // backgroundColor: Colors.transparent,
        // isScrollControlled: true,
        context: context,
        builder: (context) {
          final nameCtr = TextEditingController();
          final phoneCtr = TextEditingController();
          final cardCtr = TextEditingController();
          final barcodeCtr = TextEditingController();
          nameCtr.text = customerCtr.coName.value;
          phoneCtr.text = customerCtr.coPhone.value;
          cardCtr.text = customerCtr.coCard.value;
          barcodeCtr.text = customerCtr.coBarcode.value;
          print(doneAction.value);
          return Dialog(
            child: Obx(() => KContainer(
                  color: Colors.white,
                  h: 550,
                  child: Padding(
                    padding: const EdgeInsets.all(50.0),
                    child: !doneAction.value
                        ? Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                title,
                                style: menuTitle,
                              ),
                              const Gap(10),
                              KContainer(
                                  w: 50,
                                  h: 5,
                                  color: color,
                                  child: const SizedBox()),
                              Row(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                mainAxisAlignment:
                                    MainAxisAlignment.spaceBetween,
                                children: [
                                  Expanded(
                                    child: Column(
                                      crossAxisAlignment:
                                          CrossAxisAlignment.start,
                                      children: [
                                        const Gap(50),
                                        Text(
                                          '잔액 ${f.format(customerCtr.balance.value)}원에서',
                                          style: TextStyle(
                                              fontSize: 20,
                                              color: Colors.grey[700]),
                                        ),
                                        // RichText(
                                        //     text: TextSpan(
                                        //         text: '잔액 ${f.format(customerCtr.balance.value)}',
                                        //         style: TextStyle(
                                        //             fontSize: 18,
                                        //             fontWeight: FontWeight.bold,
                                        //             color: Colors.grey[800]),
                                        //         children: const [
                                        //       TextSpan(
                                        //         text: '원에서',
                                        //         style: TextStyle(
                                        //             fontSize: 18, fontWeight: FontWeight.normal),
                                        //       )
                                        //     ])),

                                        Obx(() {
                                          var showNumber = 0;
                                          if (customerCtr.enterPrice.value !=
                                              '') {
                                            // textColor =
                                            //     const Color.fromRGBO(
                                            //         0, 0, 0, 1);
                                            showNumber = int.parse(
                                                customerCtr.enterPrice.value);
                                          }
                                          var showPriceSideCard =
                                              customerCtr.enterPrice.value == ''
                                                  ? useText
                                                  : '${f.format(showNumber)}원';
                                          return Padding(
                                            padding: const EdgeInsets.symmetric(
                                                vertical: 0),
                                            child: Text(
                                              showPriceSideCard,
                                              style: const TextStyle(
                                                  fontSize: 28,
                                                  fontWeight: FontWeight.bold),
                                            ),
                                          );
                                        }),
                                      ],
                                    ),
                                  ),
                                  Expanded(
                                    child: Container(
                                      decoration: const BoxDecoration(
                                          borderRadius: BorderRadius.all(
                                              Radius.circular(20)),
                                          color: Colors.white),
                                      child: Padding(
                                        padding: const EdgeInsets.all(10.0),
                                        child: Column(
                                          mainAxisAlignment:
                                              MainAxisAlignment.end,
                                          children: keys
                                              .map(
                                                (x) => Row(
                                                  children: x.map((y) {
                                                    return Expanded(
                                                      child: CustomKeyboardKey(
                                                        textCtr: numberPadCtr,
                                                        label: y,
                                                        onTap: (val) {},
                                                        value: y,
                                                      ),
                                                    );
                                                  }).toList(),
                                                ),
                                              )
                                              .toList(),
                                        ),
                                      ),
                                    ),
                                  ),
                                ],
                              ),

                              // const Gap(10),
                              const Spacer(),
                              Row(
                                mainAxisAlignment:
                                    MainAxisAlignment.spaceBetween,
                                children: [
                                  kBtn(
                                      onTap: () {
                                        Get.back();
                                      },
                                      child: const AspectRatio(
                                          aspectRatio: 1,
                                          child: Icon(
                                            Icons.close_rounded,
                                            color: Colors.grey,
                                          ))),
                                  SizedBox(
                                    width: 200,
                                    child: kBtn(
                                        onTap: () async {
                                          if (isLoading.value == false) {
                                            isLoading.value = true;
                                            try {
                                              await customerCtr
                                                  .fucAddOrUse(
                                                      customerId: customer.id)
                                                  .then((value) {
                                                doneAction.value = true;
                                                isLoading.value = false;
                                              });
                                            } catch (e) {
                                              print(e);
                                            }
                                          } else {}
                                        },
                                        bgColor: color,
                                        child: Padding(
                                          padding: const EdgeInsets.symmetric(
                                              horizontal: 20),
                                          child: Center(
                                              child: Text(
                                            title,
                                            style: const TextStyle(
                                                color: Colors.white,
                                                fontWeight: FontWeight.bold),
                                          )),
                                        )),
                                  ),
                                ],
                              ),
                            ],
                          )
                        : Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              const Gap(50),
                              Icon(Icons.check_circle_outline_rounded,
                                  size: 70, color: color),
                              const Gap(20),
                              customerCtr.seclectedMenu == ActionType.add
                                  ? Text(
                                      '${f.format(int.parse(customerCtr.enterPrice.value))}원 충전완료',
                                      style: menuTitle,
                                    )
                                  : Text(
                                      '${f.format(int.parse(customerCtr.enterPrice.value))}원 사용완료',
                                      style: menuTitle,
                                    ),
                              const Spacer(),
                              kBtn(
                                  onTap: () {
                                    Get.back();
                                    doneAction.value = false;
                                    setState(() {});
                                  },
                                  child: const Center(child: Text('확인'))),
                            ],
                          ),
                  ),
                )),
          );
        });
  }

  Map<String, List<Map<String, dynamic>>> groupTransactionsByDate(
      List<Map<String, dynamic>> transactions) {
    Map<String, List<Map<String, dynamic>>> grouped = {};
    for (var transaction in transactions) {
      String date = DateFormat('yyyy-MM-dd')
          .format(DateTime.parse(transaction['created_at']));
      if (!grouped.containsKey(date)) {
        grouped[date] = [];
      }
      grouped[date]!.add(transaction);
    }
    return grouped;
  }

  Expanded StackContent({
    required String title,
    required String content,
  }) {
    return Expanded(
      child: Container(
        decoration: BoxDecoration(
          borderRadius: const BorderRadius.all(Radius.circular(15)),
          color: Colors.grey[100],
        ),
        child: Padding(
          padding: const EdgeInsets.all(10.0),
          child:
              Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(
              title,
              style: const TextStyle(color: Colors.grey, fontSize: 14),
            ),
            const Gap(5),
            Text(
              content,
              style: const TextStyle(color: Colors.black, fontSize: 16),
            ),
          ]),
        ),
      ),
    );
  }

  Row TopMenu() {
    return Row(
      children: [
        kBtn(
            onTap: () {
              final naviCtr = Get.put(NavigationController());
              naviCtr.currentMenu.value = MenuType.Home;
            },
            child: const AspectRatio(
                aspectRatio: 1,
                child: Icon(
                  Icons.arrow_back,
                  color: Colors.grey,
                ))),
        const Spacer(),
        kBtn(
            onTap: () {
              favorite.value = !favorite.value;
              customerCtr.fucFavorite(
                  customerId: customerCtr.coId.value, favorite: favorite.value);
            },
            child: Obx(() => AspectRatio(
                aspectRatio: 1,
                child: Icon(Icons.star_rounded,
                    color: favorite.value ? Colors.amber : Colors.grey)))),
        // const Gap(10),
        // kBtn(
        //     onTap: () {},
        //     child: const AspectRatio(
        //         aspectRatio: 1,
        //         child: Icon(Icons.settings_rounded, color: Colors.grey))),
      ],
    );
  }
}

class CustomerNumberPad extends StatelessWidget {
  const CustomerNumberPad({
    super.key,
    required this.showPriceSideCard,
    required this.textColor,
    required this.ctr,
    required this.type,
  });

  final String showPriceSideCard;
  final Color? textColor;
  final ActionType type;
  final TextEditingController ctr;

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.max,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        KContainer(
            w: 30,
            h: 5,
            color:
                type == ActionType.use ? Colors.blue[300] : Colors.green[300],
            child: const SizedBox()),

        const Gap(10),
        RichText(
            text: TextSpan(
                text: f.format(customerCtr.balance.value),
                style:
                    const TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                children: const [
              TextSpan(
                text: '원에서',
                style: TextStyle(fontSize: 20, fontWeight: FontWeight.normal),
              )
            ])),
        Text(
          type == ActionType.add ? '얼마를 채울까요?' : '얼마를 사용할까요?',
          style: const TextStyle(
            fontSize: 20,
          ),
        ),
        // TextField(
        //   controller: numberPadCtr,
        // ),

        Padding(
          padding: const EdgeInsets.symmetric(vertical: 20),
          child: FittedBox(
            child: Text(
              showPriceSideCard,
              style: TextStyle(fontSize: 24, color: textColor),
            ),
          ),
        ),
        FittedBox(
          child: NumberPad(
            textCtr: ctr,
          ),
        ),
      ],
    );
  }
}

class InfoText extends StatelessWidget {
  const InfoText({super.key, required this.title, required this.value});

  final String title;
  final String value;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          title,
          style: cardBalance,
        ),
        const Gap(3),
        Text(
          value,
          style: cardTitle,
        ),
        const Gap(15),
      ],
    );
  }
}
