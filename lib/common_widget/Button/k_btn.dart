import 'package:flutter/material.dart';
import 'package:jangboo_flutter/common_widget/k_container.dart';
import 'package:jangboo_flutter/const/const.dart';

class kBtn extends StatelessWidget {
  kBtn({
    super.key,
    required this.onTap,
    // required this.title,
    required this.child,
    this.bgColor,
    this.hoverColor,
  });
  final GestureTapCallback onTap;
  // final String title;
  final Widget child;
  Color? bgColor;
  Color? hoverColor;

  @override
  Widget build(BuildContext context) {
    return Container(
      height: defaultContainerH,
      decoration: BoxDecoration(
        color: bgColor ?? Colors.grey[300],
        borderRadius: const BorderRadius.all(
          Radius.circular(20.0),
        ),
      ),
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          borderRadius: const BorderRadius.all(
            Radius.circular(20.0),
          ),
          hoverColor: hoverColor ?? Colors.grey[400],
          onTap: onTap,
          child: child,
        ),
      ),
    );
  }
}
