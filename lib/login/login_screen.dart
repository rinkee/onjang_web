import 'package:flutter/material.dart';
import 'package:gap/gap.dart';
import 'package:get/get.dart';
import 'package:google_sign_in/google_sign_in.dart';
import 'package:jangboo_flutter/common_widget/Button/k_btn.dart';
import 'package:jangboo_flutter/common_widget/k_container.dart';
import 'package:jangboo_flutter/const/const.dart';
import 'package:jangboo_flutter/controller/auth_controller.dart';
import 'package:jangboo_flutter/home/home_screen.dart';
import 'package:jangboo_flutter/home/home_screen_desktop.dart';
import 'package:jangboo_flutter/login/sign_in_screen.dart';
import 'package:jangboo_flutter/supabase.dart';
import 'package:responsive_framework/responsive_framework.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:crypto/crypto.dart';
import 'dart:convert'; // for the utf8.encode method

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  // @override
  // void initState() {
  //   // TODO: implement initState
  //   super.initState();

  //   _redirect();
  // }

  // void _setupAuthListener() {
  //   supabase.auth.onAuthStateChange.listen((data) {
  //     final event = data.event;
  //     if (event == AuthChangeEvent.signedIn) {
  //       Get.off(const HomeScreen());
  //       print('crtUser : ${supabase.auth.currentUser}');
  //     } else {
  //       if (event == AuthChangeEvent.signedOut) {
  //         Get.off(LoginScreen());
  //       }
  //     }
  //   });
  // }

  // Future<void> _redirect() async {
  //   await Future.delayed(Duration.zero);
  //   if (!mounted) {
  //     return;
  //   }

  //   final session = supabase.auth.currentSession;
  //   if (session != null) {
  //     Get.to(const HomeScreenDesktop());
  //   } else {
  //     Get.to(const LoginScreen());
  //   }
  // }

  var email = '';
  var password = '';
  var autoLogin = false;
  var rememberEmailAndPassword = false;
  var showPassword = true;

  @override
  Widget build(BuildContext context) {
    return MaxWidthBox(
      maxWidth: maxWidth,
      child: Scaffold(
        body: SizedBox(
          width: Get.width,
          child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                SizedBox(
                  width: 300,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const Icon(
                        Icons.draw_rounded,
                        color: sgColor,
                        size: 30,
                      ),
                      const Text(
                        '온장에 로그인하세요',
                        style: TextStyle(
                            fontSize: 30, fontWeight: FontWeight.bold),
                      ),
                      const Gap(50),
                      const Padding(
                        padding: EdgeInsets.only(left: 5),
                        child: Text(
                          '이메일',
                          style: TextStyle(fontWeight: FontWeight.bold),
                        ),
                      ),
                      const Gap(5),
                      KContainer(
                          color: Colors.grey[100],
                          child: Padding(
                            padding: const EdgeInsets.symmetric(horizontal: 20),
                            child: Center(
                              child: TextField(
                                decoration: const InputDecoration(
                                    border: InputBorder.none),
                                onChanged: (_) {
                                  email = _;
                                },
                              ),
                            ),
                          )),
                      const Gap(30),
                      const Padding(
                        padding: EdgeInsets.only(left: 5),
                        child: Text(
                          '비밀번호',
                          style: TextStyle(fontWeight: FontWeight.bold),
                        ),
                      ),
                      const Gap(5),
                      KContainer(
                          color: Colors.grey[100],
                          child: Padding(
                            padding: const EdgeInsets.symmetric(horizontal: 20),
                            child: Row(
                              children: [
                                Expanded(
                                  child: TextField(
                                    obscureText: showPassword,
                                    decoration: const InputDecoration(
                                        border: InputBorder.none),
                                    onChanged: (_) {
                                      password = _;
                                    },
                                  ),
                                ),
                                IconButton(
                                    onPressed: () {
                                      if (showPassword == true) {
                                        showPassword = false;
                                      } else {
                                        showPassword = true;
                                      }
                                      setState(() {});
                                    },
                                    icon: Icon(showPassword
                                        ? Icons.visibility_off_rounded
                                        : Icons.visibility_rounded))
                              ],
                            ),
                          )),
                      const Gap(10),
                      Padding(
                        padding: const EdgeInsets.only(left: 5),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Row(
                              children: [
                                const Text(
                                  '자동 로그인',
                                  style: TextStyle(fontWeight: FontWeight.bold),
                                ),
                                const Gap(5),
                                Checkbox(
                                    value: autoLogin,
                                    onChanged: (val) {
                                      autoLogin = val!;
                                      setState(() {});
                                    }),
                              ],
                            ),
                            Row(
                              children: [
                                const Text(
                                  '이메일 비밀번호 기억',
                                  style: TextStyle(fontWeight: FontWeight.bold),
                                ),
                                const Gap(5),
                                Checkbox(
                                    value: rememberEmailAndPassword,
                                    onChanged: (val) {
                                      rememberEmailAndPassword = val!;
                                      setState(() {});
                                    }),
                              ],
                            ),
                          ],
                        ),
                      ),
                      const Gap(30),
                      kBtn(
                          onTap: () async {
                            if (email != '' && password != '') {
                              var key = utf8.encode(password);
                              print(key);
                              var passwordHash = sha256.convert(key).toString();
                              print(passwordHash);

                              final auth = Get.put(AuthController());
                              auth.logIn(email: email, password: password);

                              //   final emailCheck = await supabase
                              //       .from('user')
                              //       .select('*')
                              //       .eq('email', email)
                              //       .then((value) async {
                              //     if (value.isNotEmpty) {
                              //       final passwordCheck = await supabase
                              //           .from('user')
                              //           .select('*')
                              //           .eq('email', email)
                              //           .eq('password', passwordHash)
                              //           .then((value) {
                              //         if (value.isNotEmpty) {
                              //           print(value);
                              //         } else {
                              //           Get.snackbar(
                              //               '비밀번호가 맞지않아요', '비밀번호를 다시 입력해주세요',
                              //               colorText: Colors.white,
                              //               backgroundColor: Colors.black,
                              //               snackPosition: SnackPosition.TOP);
                              //         }
                              //       });
                              //     } else {
                              //       Get.snackbar(
                              //           '존재하지 않는 이메일입니다', '이메일을 다시 확인해주세요.',
                              //           colorText: Colors.white,
                              //           backgroundColor: Colors.black,
                              //           snackPosition: SnackPosition.TOP);
                              //     }
                              //   });
                              //   // print(userData);
                              //   // if (userData.isNotEmpty) {
                              //   //   print('로그인 성공');
                              //   // } else {
                              //   //   print('로그인 실패');
                              //   // }
                            }

                            if (email == '' && password == '') {
                              print('이메일 확인');
                              Get.snackbar(
                                  '이메일과 비밀번호를을 입력해주세요', '이메일과 비밀번호는 필수 입력입니다.',
                                  colorText: Colors.white,
                                  backgroundColor: Colors.black,
                                  snackPosition: SnackPosition.TOP);
                            } else if (email == '') {
                              print('이메일 확인');
                              Get.snackbar('이메일을 입력해주세요', '이메일은 필수 입력입니다.',
                                  colorText: Colors.white,
                                  backgroundColor: Colors.black,
                                  snackPosition: SnackPosition.TOP);
                            } else if (password == '') {
                              print('비밀번호 확인');
                              Get.snackbar('비밀번호를 입력해주세요', '비밀번호는 필수 입력입니다.',
                                  colorText: Colors.white,
                                  backgroundColor: Colors.black,
                                  snackPosition: SnackPosition.TOP);
                            }
                          },
                          bgColor: Colors.black,
                          child: const Center(
                              child: Text(
                            '이메일 로그인',
                            style: TextStyle(
                                fontWeight: FontWeight.bold,
                                color: Colors.white),
                          ))),
                      const Gap(10),
                      Center(
                        child: TextButton(
                            onPressed: () {
                              Get.offAll(const SingInScreen());
                            },
                            child: const Text('처음이신가요? 회원가입')),
                      ),
                    ],
                  ),
                ),

                // KContainer(
                //     child: const Center(
                //   child: Text('이메일 로그인'),
                // )),
                // GestureDetector(
                //   onTap: () async {
                //     //  final AuthResponse res = await supabase.auth.signInWithOtp(email: 'example@email.com');
                //     final res = await supabase.auth
                //         .signInWithOtp(email: 'qwedx1915@naver.com');
                //     // print(res);
                //   },
                //   child: Container(
                //     width: 200,
                //     height: 50,
                //     decoration: const BoxDecoration(
                //         color: Colors.blue,
                //         borderRadius: BorderRadius.all(Radius.circular(20))),
                //     child: const Padding(
                //       padding: EdgeInsets.all(8.0),
                //       child: Row(
                //           mainAxisAlignment: MainAxisAlignment.spaceBetween,
                //           children: [
                //             Icon(Icons.add),
                //             Text(
                //               '구글 로그인',
                //               style: TextStyle(color: Colors.white),
                //             ),
                //             Icon(Icons.add)
                //           ]),
                //     ),
                //   ),
                // )
              ]),
        ),
      ),
    );
  }
}
