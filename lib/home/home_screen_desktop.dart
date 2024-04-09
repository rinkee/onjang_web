import 'package:flutter/material.dart';
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
import 'package:jangboo_flutter/customer/customer_screen3.dart';
import 'package:jangboo_flutter/layout/desktopLayout.dart';
import 'package:jangboo_flutter/supabase.dart';
import 'package:jangboo_flutter/user/user_screen_desktop.dart';
import 'package:responsive_framework/responsive_framework.dart';
import 'package:timer_builder/timer_builder.dart';

class HomeScreenDesktop extends StatefulWidget {
  const HomeScreenDesktop({super.key});

  @override
  State<HomeScreenDesktop> createState() => _HomeScreenDesktopState();
}

class _HomeScreenDesktopState extends State<HomeScreenDesktop> {
  final TextEditingController searchCtr = TextEditingController();
  final customerCtr = Get.put(CustomerContentController());

  final isFavorited = false.obs;

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    searchCtr.addListener(() {
      print(searchCtr.text);
      customerCtr.fucSearchCustomer(searchCtr);
      if (isFavorited.value == true) {
        isFavorited.value = false;
      }
    });
  }

  TextStyle isClikedStyle =
      const TextStyle(fontSize: 16, fontWeight: FontWeight.bold);
  TextStyle isNotClikedStyle = const TextStyle(
    color: Colors.grey,
    fontSize: 16,
    fontWeight: FontWeight.bold,
  );

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      drawer: Drawer(
        width: 300,
        backgroundColor: Colors.white,
        child: ListView(
          padding: EdgeInsets.zero,
          children: [
            ListTile(
              title: const Text('가게 이름'),
              onTap: () {
                Navigator.pop(context);
              },
            ),
            ListTile(
              leading: const Icon(Icons.update),
              title: const Text('Updates'),
              onTap: () {},
            ),
            ListTile(
              leading: const Icon(Icons.settings_rounded),
              title: const Text('설정'),
              onTap: () {},
            ),
          ],
        ),
      ),
      appBar: AppBar(
        actions: [
          Obx(
            () => Text(
              userCtr.storeName.value,
              style: const TextStyle(color: Colors.black),
            ),
          ),
          Text(userCtr.uid.value),
          const Gap(20),
          Obx(() => Padding(
                padding: const EdgeInsets.only(right: 10),
                child: SizedBox(
                    height: 45,
                    child: kBtn(
                        onTap: () async {
                          Get.to(() => const UserScreenDesktop());
                        },
                        child: Padding(
                          padding: const EdgeInsets.symmetric(horizontal: 14),
                          child: Center(
                            child: Text(userCtr.userName.value),
                          ),
                        ))),
              )),
          TimerBuilder.periodic(
            const Duration(seconds: 60),
            builder: (context) {
              return Text(
                DateFormat('M.dd (E) a hh:mm', 'ko_KR').format(DateTime.now()),
                style: const TextStyle(
                  fontWeight: FontWeight.w600,
                ),
              );
            },
          ),
        ],
      ),
      body: Row(
        children: [
          Expanded(
            flex: 4,
            child: Container(
              color: Colors.grey[100],
              child: Padding(
                padding: const EdgeInsets.all(10.0),
                child: Column(
                  children: [
                    Padding(
                        padding: const EdgeInsets.only(bottom: 10),
                        child: Obx(
                          () => Row(
                            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                            children: [
                              kBtn(
                                onTap: () {
                                  isFavorited.value = false;
                                },
                                child: SizedBox(
                                  width: 120,
                                  child: Center(
                                      child: Text('모든 고객',
                                          style: isFavorited.value
                                              ? isNotClikedStyle
                                              : isClikedStyle)),
                                ),
                              ),
                              kBtn(
                                onTap: () {
                                  isFavorited.value = true;
                                },
                                child: SizedBox(
                                  width: 120,
                                  child: Center(
                                    child: Text(
                                      '즐겨찾기',
                                      style: !isFavorited.value
                                          ? isNotClikedStyle
                                          : isClikedStyle,
                                    ),
                                  ),
                                ),
                              ),

                              const Spacer(),
                              kBtn(
                                bgColor: subColor,
                                onTap: () {},
                                child: const SizedBox(
                                  width: 120,
                                  child: Center(
                                    child: Text(
                                      '장부 추가',
                                      style: TextStyle(
                                          fontSize: 16,
                                          color: sgColor,
                                          fontWeight: FontWeight.bold),
                                    ),
                                  ),
                                ),
                              ),

                              // KNewBalanceAddBtn(),
                            ],
                          ),
                        )),
                    Obx(
                      () => CustomerCard(
                        favorite: isFavorited.value,
                      ),
                    )
                  ],
                ),
              ),
            ),
          ),

          // side content
          Container(
            width: 350,
            color: Colors.white,
            child: Padding(
              padding: const EdgeInsets.all(10.0),
              child: Column(
                children: [
                  KSearchBar(
                    textCtr: searchCtr,
                  ),
                  Container(
                    decoration: const BoxDecoration(
                      borderRadius: BorderRadius.all(Radius.circular(20)),
                    ),
                    child: Padding(
                      padding: const EdgeInsets.all(10.0),
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.end,
                        children: keys
                            .map(
                              (x) => Row(
                                children: x.map((y) {
                                  return Expanded(
                                    child: CustomKeyboardKey(
                                      textCtr: searchCtr,
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
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
