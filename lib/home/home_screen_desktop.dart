import 'package:flutter/material.dart';
import 'package:gap/gap.dart';
import 'package:get/get.dart';
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

class HomeScreenDesktop extends StatefulWidget {
  const HomeScreenDesktop({super.key});

  @override
  State<HomeScreenDesktop> createState() => _HomeScreenDesktopState();
}

class _HomeScreenDesktopState extends State<HomeScreenDesktop> {
  final TextEditingController searchCtr = TextEditingController();
  final customerCtr = Get.put(CustomerContentController());

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    searchCtr.addListener(() {
      print(searchCtr.text);
      customerCtr.fucSearchCustomer(searchCtr);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.grey[100],
      child: MaxWidthBox(
        maxWidth: maxWidth,
        child: Scaffold(
          appBar: AppBar(
            backgroundColor: Colors.grey[100],
            title: const Text('장부 이름'),
            actions: [
              Obx(
                () => Text(
                  userCtr.storeName.value,
                  style: const TextStyle(color: Colors.black),
                ),
              ),
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
                              padding:
                                  const EdgeInsets.symmetric(horizontal: 14),
                              child: Center(
                                child: Text(userCtr.userName.value),
                              ),
                            ))),
                  )),
            ],
          ),
          backgroundColor: Colors.grey[100],
          body: Padding(
            padding: const EdgeInsets.only(left: 30, top: 20, right: 30),
            child: Row(
              children: [
                Expanded(
                  flex: 3,
                  child: Column(
                    children: [
                      Container(
                        color: Colors.grey[100],
                        child: const Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Text(
                              '고객 리스트',
                              style: TextStyle(
                                  fontSize: 24, fontWeight: FontWeight.bold),
                            ),
                            KNewBalanceAddBtn(),
                          ],
                        ),
                      ),
                      const Gap(20),
                      CustomerCard(),
                    ],
                  ),
                ),
                const Gap(20),
                // side content
                Expanded(
                  flex: 2,
                  child: Column(
                    children: [
                      // const Gap(140),
                      KSearchBar(
                        textCtr: searchCtr,
                      ),
                      const Gap(20),
                      // KContainer(
                      //   h: 350,
                      //   color: Colors.white,
                      //   child: NumberPad(
                      //     textCtr: searchCtr,
                      //   ),
                      // ),
                      Container(
                        decoration: const BoxDecoration(
                            borderRadius: BorderRadius.all(Radius.circular(20)),
                            color: Colors.white),
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
                      const Gap(20),
                      // kBtn(
                      //   bgColor: sgColor,
                      //   child: const Center(
                      //       child: Text(
                      //     '검색하기',
                      //     style: TextStyle(color: Colors.white),
                      //   )),
                      //   onTap: () {
                      //     searchCtr.text = '1';
                      //   },
                      // )
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
