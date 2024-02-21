import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:jangboo_flutter/const/const.dart';

class KContainer extends StatelessWidget {
  KContainer({super.key, required this.child, this.color, this.h, this.w});

  final Widget child;
  Color? color;
  double? w;
  double? h;
  @override
  Widget build(BuildContext context) {
    return Container(
        width: w ?? Get.width,
        height: h ?? defaultContainerH,
        decoration: BoxDecoration(
            borderRadius: const BorderRadius.all(Radius.circular(20)),
            color: color ?? Colors.white),
        child: child);
  }
}
