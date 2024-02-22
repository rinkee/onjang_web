import 'package:get/get.dart';
import 'package:jangboo_flutter/home/home_screen_desktop.dart';
import 'package:jangboo_flutter/login/login_screen.dart';
import 'package:jangboo_flutter/mainScreen.dart';
import 'package:jangboo_flutter/supabase.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class AuthController extends GetxController {
  static AuthController get to => Get.find();
  // Rxn<User> firebaseUser = Rxn<User>();
  // Rxn<UserModel> firestoreUser = Rxn<UserModel>();
  // RxBool isLoggedIn = false.obs;
  final userName = ''.obs;
  final storeName = ''.obs;

  @override
  void onReady() {
    // TODO: implement onReady
    super.onReady();
    _setupAuthListener();
    //run every time auth state changes
    // ever(firebaseUser, handleAuthChanged);
    // firebaseUser.bindStream(user);
  }

  void _setupAuthListener() {
    final authSubscription = supabase.auth.onAuthStateChange.listen((data) {
      final AuthChangeEvent event = data.event;
      // final Session? session = data.session;
      if (event == AuthChangeEvent.signedIn) {
        fetchUserData(supabase.auth.currentUser!.id);
        Get.offAll(const HomeScreenDesktop());
        print('crtUser : ${supabase.auth.currentUser}');
      } else {
        if (event == AuthChangeEvent.signedOut) {
          print('go to login');
          Get.offAll(const LoginScreen());
        }
      }
      final session = supabase.auth.currentSession;
      if (session != null) {
        print('go to Home with session');
        fetchUserData(session.user.id);
        Get.offAll(const HomeScreenDesktop());
      } else {
        print('go to login with session');

        Get.offAll(const LoginScreen());
      }
    });
    // supabase.auth.onAuthStateChange.listen((data) {
    //   final event = data.event;
    //   if (event == AuthChangeEvent.signedIn) {
    //     Get.off(const HomeScreenDesktop());
    //     print('crtUser : ${supabase.auth.currentUser}');
    //   } else {
    //     if (event == AuthChangeEvent.signedOut) {
    //       Get.off(const LoginScreen());
    //     }
    //   }
    // });
  }

  fetchUserData(uid) {
    var userData = supabase.from('user').select().eq('uid', uid).then((value) {
      if (value.isNotEmpty) {
        userName.value = value.first['name'];
        storeName.value = value.first['store_name'];
        print('connect user data');
        print(userName.value);
        print(storeName.value);
      }
    });
  }

  Future logIn({required String email, required String password}) async {
    try {
      final AuthResponse res = await supabase.auth.signInWithPassword(
        email: email,
        password: password,
      );
      final Session? session = res.session;
      final User? user = res.user;
      return res;
    } catch (e) {
      return e;
    }
  }

  Future signUp(
      {required String email,
      required String password,
      required String name,
      required String passwordHash,
      required String store_name}) async {
    try {
      final AuthResponse res = await supabase.auth.signUp(
        email: email,
        password: password,
      );
      final Session? session = res.session;
      final User? user = res.user;
      await supabase.from('user').insert({
        'email': email,
        'name': name,
        'password': passwordHash,
        'store_name': store_name,
        'uid': user!.id,
      }).select('*');
      return res;
    } catch (e) {
      print(e);
      return 'error';
    }
  }

  // handleAuthChanged(firebaseUser) async {
  //   //get user data from firestore
  //   if (firebaseUser?.uid != null) {
  //     firestoreUser.bindStream(streamFirestoreUser());
  //   }
  //   if (firebaseUser == null) {
  //     Get.offAll(() => LoginPage());
  //   } else {
  //     Get.offAll(() => HomePage());
  //   }
  // }

  // //Streams the firestore user from the firestore collection
  // Stream<UserModel> streamFirestoreUser() {
  //   print('streamFirestoreUser()');

  //   return firebaseFirestore
  //       .doc('/users/${firebaseUser.value!.uid}')
  //       .snapshots()
  //       .map((snapshot) => UserModel.fromMap(snapshot.data()!));
  // }

  // // Sign out
  Future<void> signOut() {
    return supabase.auth.signOut();
  }
}
